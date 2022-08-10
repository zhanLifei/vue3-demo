export function datainjs () {
    const data = [
        {
            id: 1, 
            name: '车贷', 
            totalAmount : 180000,  
            list: [
                {time: '2021-10-15', Repaid: 1000, type: '微信'},
                {time: '2021-11-16', Repaid: 1000, type: '微信'},
                {time: '2021-12-16', Repaid: 1000, type: '微信'},
                {time: '2022-01-17', Repaid: 1000, type: '微信'},
            ]
        },
        {
            id: 2, 
            name: '借款', 
            totalAmount : 40000, 
            list: []
        },
        {
            id: 3, 
            name: '日常开销', 
            totalAmount : 5328, 
            list: [
                {time: '2021-11-16', Repaid: 888, type: '微信'},
                {time: '2021-12-16', Repaid: 888, type: '微信'},
                {time: '2022-01-17', Repaid: 888, type: '微信'},
            ]
        },
      ];
    return data
}