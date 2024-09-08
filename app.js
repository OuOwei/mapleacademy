// 简单的验证函数
function validateInput(input) {
    return input !== '' && !isNaN(input) && parseInt(input) >= 0 && parseInt(input) <= 77;
}

// 加密函数
function encryptData(data, key) {
    return CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();
}

// 解密函数
function decryptData(encryptedData, key) {
    const bytes = CryptoJS.AES.decrypt(encryptedData, key);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}

document.addEventListener('DOMContentLoaded', function() {
    const useExtraTimesCheckbox = document.getElementById('useExtraTimes');
    const extraTimesSelect = document.getElementById('extraTimes');
    const useTargetDateCheckbox = document.getElementById('useTargetDate');
    const targetDateInput = document.getElementById('targetDate');
    const todayCompletedCheckbox = document.getElementById('todayCompleted');

    useExtraTimesCheckbox.addEventListener('change', function() {
        extraTimesSelect.disabled = !this.checked;
        if (this.checked) {
            useTargetDateCheckbox.checked = false;
            targetDateInput.disabled = true;
        }
    });

    useTargetDateCheckbox.addEventListener('change', function() {
        targetDateInput.disabled = !this.checked;
        if (this.checked) {
            useExtraTimesCheckbox.checked = false;
            extraTimesSelect.disabled = true;
        }
    });

    document.getElementById('medalCalculator').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 验证输入
        const completedTimes = Array.from(document.querySelectorAll('.completed-times')).map(input => input.value);
        if (!completedTimes.every(validateInput)) {
            alert('請輸入有效的完成次數（0-77之間的整數）');
            return;
        }

        // 其余的计算逻辑保持不变
        // ...

        // 在计算结果之后，我们可以加密数据
        const resultData = {
            // 存储计算结果的对象
        };

        // 使用一个密钥加密数据（在实际应用中，这个密钥应该安全存储）
        const encryptionKey = 'your-secret-key';
        const encryptedResult = encryptData(resultData, encryptionKey);

        // 将加密后的结果存储到localStorage
        localStorage.setItem('encryptedResult', encryptedResult);

        // 显示结果
        document.getElementById('result').innerHTML = resultHtml;
    });
});
