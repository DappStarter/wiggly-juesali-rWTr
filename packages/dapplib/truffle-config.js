require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enroll supply suggest name release stereo purpose gesture globe equal gift'; 
let testAccounts = [
"0xa5f2912deefab9c66d775323973dc4847559b17fd7ce35e0c61a22afa461815d",
"0x03fce2b971954258d675987e4802def883e572f5a37d257290a1d18888b4c544",
"0xc4cae356be2cd79b46f8c9269d0aee62d9449e15a484847e92f1c37eca62ab78",
"0x99829f0a9fc4cc35370223baf05d737146b749c0e81e81db56470aed06c7be11",
"0x04b9feacfa5622b2bd635202c748537fdbc12100d82a69442ecb8c46e7e2b26d",
"0x2ef7ef8d71ad2fb9c418126840b3c3eb7fbd69ec46a7d3d635cd88eb9afc5210",
"0x19871689192fdc8d44461cbe57e4b4c7fb07e136fb93758b72bcc9dd6fbabd68",
"0x1b531a185c4c0b70252b2e60e3878928bc9f5f9d1ab9005d90862822cb1b4234",
"0x1cdd3d99b0c9196596e442042ffc0bb381d94f47f646714e0da6938faba60ed8",
"0x3086bfa2423d2ea53bc2713ae7c91e87e30fcbafd7d94f40f2ab9ad92883b660"
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


