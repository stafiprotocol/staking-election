<!--
 * @Author: your name
 * @Date: 2021-06-16 13:41:12
 * @LastEditTime: 2021-06-17 08:57:07
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

node getHistory

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





