/*
 * @Author: your name
 * @Date: 2021-06-15 10:29:42
 * @LastEditTime: 2021-06-16 14:52:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /posStrategy/main.js
 */

const fs = require('fs');
const { ApiPromise, WsProvider } = require('@polkadot/api')
const { isHex } = require('@polkadot/util')

let DOT_DECIMAL_PLACES = 10000000000;

(async () => {
    console.log('Connecting to Polkadot')
    provider = new WsProvider('wss://rpc.polkadot.io')

    const api = await ApiPromise.create({ provider })
    const [currentValidators, totalIssuance, currentEra] = await Promise.all([
    api.query.session.validators(),
    api.query.balances.totalIssuance(),
    api.query.staking.currentEra(),
    ]);

    for (CurrentEpoch = currentEra-1; CurrentEpoch > 0 ; CurrentEpoch -- ) {

        CurrentEraTest = String(CurrentEpoch)

        const RewardPoints = await api.query.staking.erasRewardPoints(CurrentEraTest);

        // check rewards
        tempRewardPoints = JSON.parse(RewardPoints)


        // The total validator era payout for the last HISTORY_DEPTH eras.
        const ValidatorReward = await api.query.staking.erasValidatorReward(CurrentEraTest);
        dotPerEraReward = parseFloat(ValidatorReward.toString()) / DOT_DECIMAL_PLACES;
        validatorNumber = currentValidators.length;


        JSonResult = {};

        // get returns
        // 24 hors per era
        for (let i = 0; i < currentValidators.length; i++) {
            const validatorStake = await api.query.staking.erasStakers(CurrentEraTest, currentValidators[i])
            const validatorTotalStake = validatorStake['total'].toString() / DOT_DECIMAL_PLACES
            const validatorAddress = currentValidators[i]
            let validatorReward = tempRewardPoints['individual'][validatorAddress]/tempRewardPoints.total * dotPerEraReward
            
            YieldPerEra = validatorReward / validatorTotalStake 
            YieldPerYear = YieldPerEra * 365
            // JSonResult[validatorAddress] = Json.parse(`{"validatorReward": ${validatorReward}, "validStake": ${validatorTotalStake}, "YieldPerYear": ${YieldPerYear} }`)
            JSonResult[validatorAddress] = {"validatorReward": validatorReward, "validStake": validatorTotalStake, "YieldPerYear": YieldPerYear}
            console.log(`address: ${validatorAddress}, validatorReward: ${validatorReward}, validStake: ${validatorTotalStake}, YieldPerYear: ${YieldPerYear}%`)

        }


        // Display Reward Points
        console.log(`current currentEra ${currentEra}`);
        console.log(`RewardPoints ${RewardPoints}`);
        console.log(`ValidatorReward ${ValidatorReward}`);
        console.log(`per era reward DOT: ${dotPerEraReward} `);
        console.log(`per validator reward DOT: `)
        // console.log(JSonResult)

        const data = JSON.stringify(JSonResult);


        // 这里要异步存，不然会出事情
        console.log(data)
        try {
            fs.writeFileSync(`./data/Era${CurrentEraTest}.json`, data);
            console.log("JSON data is saved.");
        } catch (error) {
            console.error(err);
        }

    }

    process.exit()
})()






