/*
东东农场互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写京东东农场的好友码。
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let FruitShareCodes = [
  '779e60187ed94214a3da9a777d265554@5ab4e27627e24fc09dd9d2ea47f4c6b4@c0bb738ebf174ed3bfbe05b4011ee3ce@83039e89f4e243f98a8254c4905e296b@83e5ed1126e24abcaa36f9c6a9b84f0d@ceab0f2d2873443f9de9a31d61bedf0a@5012e0ad9c30406b8647c1131ec744a1@a33af6f1934d46a39375d67d26ea90e9@61783a504aac4932bf4c381c4943b306',
  '779e60187ed94214a3da9a777d265554@5ab4e27627e24fc09dd9d2ea47f4c6b4@c0bb738ebf174ed3bfbe05b4011ee3ce@83039e89f4e243f98a8254c4905e296b@83e5ed1126e24abcaa36f9c6a9b84f0d@ceab0f2d2873443f9de9a31d61bedf0a@5012e0ad9c30406b8647c1131ec744a1@a33af6f1934d46a39375d67d26ea90e9@61783a504aac4932bf4c381c4943b306',
]

// 从日志获取互助码
// const logShareCodes = require('./utils/jdShareCodes');
// if (logShareCodes.FRUITSHARECODES.length > 0 && !process.env.FRUITSHARECODES) {
//   process.env.FRUITSHARECODES = logShareCodes.FRUITSHARECODES.join('&');
// }

// 判断github action里面是否有东东农场互助码
if (process.env.FRUITSHARECODES) {
  if (process.env.FRUITSHARECODES.indexOf('&') > -1) {
    console.log(`您的东东农场互助码选择的是用&隔开\n`)
    FruitShareCodes = process.env.FRUITSHARECODES.split('&');
  } else if (process.env.FRUITSHARECODES.indexOf('\n') > -1) {
    console.log(`您的东东农场互助码选择的是用换行隔开\n`)
    FruitShareCodes = process.env.FRUITSHARECODES.split('\n');
  } else {
    FruitShareCodes = process.env.FRUITSHARECODES.split();
  }
} else {
  console.log(`由于您环境变量(FRUITSHARECODES)里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < FruitShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['FruitShareCode' + index] = FruitShareCodes[i];
}
