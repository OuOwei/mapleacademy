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
        const completedTimes = Array.from(document.querySelectorAll('.completed-times')).map(input => parseInt(input.value));
        if (!completedTimes.every(validateInput)) {
            alert('請輸入有效的完成次數（0-77之間的整數）');
            return;
        }

        const useExtraTimes = useExtraTimesCheckbox.checked;
        const extraTimes = useExtraTimes ? parseInt(extraTimesSelect.value) : 0;
        const useTargetDate = useTargetDateCheckbox.checked;
        const targetDate = useTargetDate ? new Date(targetDateInput.value) : null;
        const todayCompleted = todayCompletedCheckbox.checked;
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        const totalCompleted = completedTimes.reduce((a, b) => a + b, 0);
        const remainingTimes = 7 * 77 - totalCompleted;
        const freePlaysPerDay = 2;
        const maxPlaysPerDay = 7;
        const totalPlaysPerDay = Math.min(freePlaysPerDay + extraTimes, maxPlaysPerDay);

        let resultHtml = `<p>剩餘完成次數：${remainingTimes}</p>`;

        if (useTargetDate && targetDate) {
            const startDate = todayCompleted ? tomorrow : today;
            const daysUntilTarget = Math.ceil((targetDate - startDate) / (1000 * 60 * 60 * 24));
            const requiredPlaysPerDay = Math.ceil(remainingTimes / daysUntilTarget);
            const requiredPaidPlaysPerDay = Math.min(Math.max(0, requiredPlaysPerDay - freePlaysPerDay), 5);
            const actualPlaysPerDay = Math.min(requiredPlaysPerDay, maxPlaysPerDay);
            const actualDaysNeeded = Math.ceil(remainingTimes / actualPlaysPerDay);
            const actualCompletionDate = new Date(startDate.getTime() + actualDaysNeeded * 24 * 60 * 60 * 1000);
            const totalCost = actualDaysNeeded * requiredPaidPlaysPerDay * 10;

            resultHtml += `
                <p>距離目標日期天數：${daysUntilTarget}</p>
                <p>每天需完成次數/任務每天總次數上限：${actualPlaysPerDay}/${maxPlaysPerDay}</p>
                <p>每天需要額外付費次數：${requiredPaidPlaysPerDay}</p>
                <p>實際完成日期：${actualCompletionDate.toLocaleDateString()}</p>
                <p>預計總金額：${totalCost} 元</p>
            `;

            if (requiredPlaysPerDay > maxPlaysPerDay) {
                resultHtml += '<div class="alert alert-warning">警告：每天需要完成的次數超過7次。實際完成日期將晚於目標日期。</div>';
            }
        } else {
            const startDate = todayCompleted ? tomorrow : today;
            const daysNeeded = Math.ceil(remainingTimes / totalPlaysPerDay);
            const estimatedCompletionDate = new Date(startDate.getTime() + daysNeeded * 24 * 60 * 60 * 1000);
            
            resultHtml += `
                <p>預計天數：${daysNeeded} 天</p>
                <p>預計完成日期：${estimatedCompletionDate.toLocaleDateString()}</p>
                <p>每天需完成次數/任務每天總次數上限：${totalPlaysPerDay}/${maxPlaysPerDay}</p>
            `;

            if (useExtraTimes) {
                const totalCost = daysNeeded * extraTimes * 10;
                resultHtml += `<p>預計總金額：${totalCost} 元</p>`;
            }
        }

        // 加密结果数据
        const resultData = {
            remainingTimes,
            useTargetDate,
            targetDate: targetDate ? targetDate.toISOString() : null,
            useExtraTimes,
            extraTimes,
            todayCompleted,
            resultHtml
        };

        // 使用一个密钥加密数据（在实际应用中，这个密钥应该安全存储）
        const encryptionKey = 'your-secret-key';
        const encryptedResult = encryptData(resultData, encryptionKey);

        // 将加密后的结果存储到localStorage
        localStorage.setItem('encryptedResult', encryptedResult);

        // 显示结果
        document.getElementById('result').innerHTML = resultHtml;
    });

    // 检查是否有保存的加密结果，如果有，则解密并显示
    const savedEncryptedResult = localStorage.getItem('encryptedResult');
    if (savedEncryptedResult) {
        try {
            const decryptedResult = decryptData(savedEncryptedResult, 'your-secret-key');
            document.getElementById('result').innerHTML = decryptedResult.resultHtml;
        } catch (error) {
            console.error('Error decrypting saved result:', error);
        }
    }
});