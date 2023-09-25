var xlsx = require("node-xlsx");
var fs = require("fs");

var sheets = xlsx.parse("./excel.xlsx"); // 获取到所有sheets

// 配置
const config = {
    langList: ["ja", "en", "tc", "ko"], // 语言列表，按照excel中的顺序，从第三列开始
    path: "./src/lang", // 语言文件路径
    suffix: ".js", // 语言文件路径
};

// 获取默认结果
const getDefaultResult = (langList) => {
    const result = {};
    langList.forEach((lang) => {
        result[lang] = {};
    });
    return result;
};
// 设置单个sheet的默认结果
const setDefaultSheetResult = (result, name, langList) => {
    langList.forEach((lang) => {
        result[lang][name] = {};
    });
};
// 设置各语言的结果
const setLangResult = (result, name, langList, row) => {
    const key = row[0];
    langList.forEach((lang, index) => {
        result[lang][name][key] = row[index + 2] || ""; // 默认值为空
    });
};
// 导出文件
const exportFile = (result, { langList, path, suffix }) => {
    return new Promise((resolve) => {
        let finishedCount = 0;
        langList.forEach((lang) => {
            const filePath = `${path}/${lang}${suffix}`;
            const content = `export default ${JSON.stringify(result[lang], null, 2)}`;
            fs.writeFile(filePath, content, function (err) {
                finishedCount++;
                if (err) {
                    console.log("err:", err);
                    throw err;
                }
                console.log("Saved:", lang);
                // 全部导出完成
                if (finishedCount === langList.length) {
                    resolve();
                }
            });
        });
    });
};

// 主函数：将excel转换为json
const excelToJson = async (sheets, config) => {
    const { langList } = config;
    // 获取默认结果
    let result = getDefaultResult(langList);
    sheets.forEach((sheet) => {
        const { name, data } = sheet;
        // 设置单个sheet的默认结果
        setDefaultSheetResult(result, name, langList);
        data.forEach((row, index) => {
            if (index === 0) return;
            // 设置各语言的结果
            setLangResult(result, name, langList, row);
        });
    });
    // 导出文件
    await exportFile(result, config);
    console.log("export sussess!");
};
// 执行主函数
excelToJson(sheets, config);
