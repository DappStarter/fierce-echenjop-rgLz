require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enroll frame short fan razor misery arrow hover fat swing gaze'; 
let testAccounts = [
"0x7036689faf5bd2972358405fe80ab65039d7a3d8c22cb2be4e00b7dd19525afc",
"0x33b70bc487c13a16dde0bdea7f687b398a3b26985c3d7fbb171b69aef8006023",
"0x3e7ba73514186238d90e1df1a04b938402f5d3749e3c6cb6fd2043770a4c9f64",
"0x27173174cc4bdeede3fdf233ba433f87ab34fb58f222d343e4108fd15ebe8800",
"0x2aa5cc8eb6fc54f16f3b8d96ab361085313775f488671de9a25cda255da85ce0",
"0xc87c3b11b6310019b269a112aa21d6c7031947cbc0a378688208b405c3aee765",
"0xeb50f1d86e2012398ccc622997c5ccdda3551f42bc035aa2ccff80c3113e47ce",
"0xdd65991d73ef8375818d4e618836ec98c96b570b02c71e80b0ec4b9164adcef3",
"0x806d3fadf0c9b3f6d67ec5bc0a31199a22a407cc6a686002a6d2964bf3df5c2a",
"0x4af86fa00fa5d70a3e57d73ce2ed1e28790593192415ecdd8247cd43021283e6"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


