document.addEventListener('DOMContentLoaded', function() {
    const useExtraTimesCheckbox = document.getElementById('useExtraTimes');
    const extraTimesSelect = document.getElementById('extraTimes');
    const useTargetDateCheckbox = document.getElementById('useTargetDate');
    const targetDateInput = document.getElementById('targetDate');

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
        
        const completedTimes = Array.from(document.querySelectorAll('.completed-times')).map(input => parseInt(input.value));
        const useExtraTimes = useExtraTimesCheckbox.checked;
        const extraTimes = useExtraTimes ? parseInt(extraTimesSelect.value) : 0;
        const useTargetDate = useTargetDateCheckbox.checked;
        const targetDate = useTargetDate ? new Date(targetDateInput.value) : null;
        const today = new Date();

        const totalCompleted = completedTimes.reduce((a, b) => a + b, 0);
        const remainingTimes = 7 * 77 - totalCompleted;
        const freePlaysPerDay = 2;
        const maxPlaysPerDay = 7;
        const totalPlaysPerDay = Math.min(freePlaysPerDay + extraTimes, maxPlaysPerDay);

        let resultHtml = `<p>剩餘完成次數：${remainingTimes}</p>`;

        if (useTargetDate && targetDate) {
            const daysUntilTarget = Math.ceil((targetDate - today) / (1000 * 60 * 60 * 24));
            const requiredPlaysPerDay = Math.ceil(remainingTimes / daysUntilTarget);
            const requiredPaidPlaysPerDay = Math.min(Math.max(0, requiredPlaysPerDay - freePlaysPerDay), 5);
            const actualPlaysPerDay = Math.min(requiredPlaysPerDay, maxPlaysPerDay);
            const actualDaysNeeded = Math.ceil(remainingTimes / actualPlaysPerDay);
            const actualCompletionDate = new Date(today.getTime() + actualDaysNeeded * 24 * 60 * 60 * 1000);
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
            const daysNeeded = Math.ceil(remainingTimes / totalPlaysPerDay);
            const estimatedCompletionDate = new Date(today.getTime() + daysNeeded * 24 * 60 * 60 * 1000);
            
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

        document.getElementById('result').innerHTML = resultHtml;
    });
});
