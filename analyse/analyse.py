'''
Author: your name
Date: 2021-06-16 16:19:42
LastEditTime: 2021-06-17 09:56:31
LastEditors: Please set LastEditors
Description: In User Settings Edit
FilePath: /staking-election/analyse/analyse.py
'''

import json
from matplotlib import pyplot as plt 


for i in range(295, 380):
    
    path = "../data/Era{}.json".format(i)
    with open(path,"r") as f:
        EraRecord = json.load(f)

        X = []
        Y = []
        EraRecordNumber = len(EraRecord)

        validStakeSum = 0
        for validator in EraRecord.keys():
            validatorReward = EraRecord[validator]['validatorReward']
            # validStake
            validStake = EraRecord[validator]['validStake']
            # YieldPerYear
            YieldPerYear = EraRecord[validator]['YieldPerYear']

            validStakeSum = validStakeSum + validStake
            
            if validStake > 0:
                X.append(validStake)
                Y.append(validatorReward)

        AvgvalidStake = validStakeSum * 1.0 / EraRecordNumber

        
        print(AvgvalidStake)
        print(X)
        
        # validStake - AvgvalidStake
        X[:] = [x - AvgvalidStake for x in X]

        print(X)
        print(Y)
            

        plt.title("Matplotlib demo") 
        plt.xlabel("X") 
        plt.ylabel("Y") 
        plt.plot(X, Y) 
        plt.show()






        f.close()
        break



