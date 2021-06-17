<!--
 * @Author: your name
 * @Date: 2021-06-16 13:41:12
 * @LastEditTime: 2021-06-17 14:31:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /staking-election/README.md
-->
# staking-election


To run the script, make sure you have `yarn` and `nodejs` installed.


run the commands below to install the yarn dependencies and the necessary polkadot api packages

```

yarn

yarn add @polkadot/api

```

### Get History Data



Get the the history data from polkadot mainnet.  




```

node getHistory.js

{
    "114SUbKCXjmb9czpWTtS3JANSmNRwVa4mmsMrWYpRG1kDH5":
    {   
        "validatorReward":1031.1391781383513,
        "validStake":1804211.8756196864,
        "YieldPerYear":0.20860399219533415}
    }
    ...
}

```


### Get Polkadot Strategy



```

node polkadotStrategy.js


address: 11BgR7fH8Sq6CcGcXxZrhyrBM2PUpDmhnGZpxPGvVGXEiPT, validatorReward: NaN, validStake: 2170199.890048424, YieldPerYear: NaN%
address: 11MJU5Q1rQh5BKuuECePhSAutv3WEVx6f2x9eZk9HXkCC1e, validatorReward: NaN, validStake: 2156724.453403287, YieldPerYear: NaN%
address: 11uMPbeaEDJhUxzU4ZfWW9VQEsryP9XqFcNRfPdYda6aFWJ, validatorReward: NaN, validStake: 2172180.089543424, YieldPerYear: NaN%
address: 1124RsfEgJEZvEq4HbtGFcpqoxnqSy79EjNZY9tzPct3AB6o, validatorReward: NaN, validStake: 1833623.4910704065, YieldPerYear: NaN%
address: 112A6wJPeDsf34nsqoAkAtQ8n74vJU8qmyKMtzX7ZPQH2kXa, validatorReward: NaN, validStake: 1857647.9332481725, YieldPerYear: NaN%
address: 13mK8AssyPekT5cFuYQ7ijKNXcjHPq8Gnx6TxF5eFCAwoLQ, validatorReward: NaN, validStake: 1908258.448315092, YieldPerYear: NaN%
address: 16i8gNQVRRSdraEbFAbgRGBZdrCgeAeyersrGfqmB2kT3rj, validatorReward: NaN, validStake: 2000689.1676912943, YieldPerYear: NaN%
address: 16rX55HPAynS8bCv6h4kuq5RLzCiZkexK5XKqBtbisvychB, validatorReward: NaN, validStake: 1854099.048899498, YieldPerYear: NaN%
address: 17bR6rzVsVrzVJS1hM4dSJU43z2MUmz7ZDpPLh8y2fqVg7m, validatorReward: NaN, validStake: 2117284.8151262295, YieldPerYear: NaN%
address: 1A2ATy1FEu5yQ9ZzghPLsRckPQ7XLmq5MJQYcTvGnxGvCho, validatorReward: NaN, validStake: 2111802.796087235, YieldPerYear: NaN%
address: 1CKUGhSt9nkJ7EcitGvrKN67937XssYvYfdd58KiLKC219S, validatorReward: NaN, validStake: 2187355.1814574106, YieldPerYear: NaN%
address: 1CnnkaqNJWLeny9GMB2D66xQBbZGJBuPYsqdFzj3eGrMQRu, validatorReward: NaN, validStake: 3037121.198933431, YieldPerYear: NaN%
address: 1Dy7FYbwhvCY2VPDk5DDduxC5zpYHbUz1DvuZ4avZSp7sgD, validatorReward: NaN, validStake: 1877393.6010801408, YieldPerYear: NaN%
address: 1Ew5wAsMtvbRdd4RdxSheLpEkSRc718gtcfTv8EmgzEbknA, validatorReward: NaN, validStake: 2013651.5960806452, YieldPerYear: NaN%
```




