<?php
$pageTitle = "勳章計算器";
$currentPage = "calculator";
include 'header.php';
?>

<main>
    <h2 class="mb-4">楓之谷怪物公園勳章計算器</h2>
    <form id="medalCalculator">
        <div class="row mb-3">
            <div class="col-md-6 p-3 completed-times-section">
                <h3>已完成次數</h3>
                <?php
                $days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
                $dayNames = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];
                foreach ($days as $index => $day) {
                    echo "<div class='mb-2'>";
                    echo "<label for='$day' class='form-label'>{$dayNames[$index]}</label>";
                    echo "<input type='number' class='form-control completed-times' id='$day' min='0' max='77' value='0'>";
                    echo "</div>";
                }
                ?>
            </div>
            <div class="col-md-6 p-3 extra-settings-section">
                <h3>額外設定</h3>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="useExtraTimes">
                    <label class="form-check-label" for="useExtraTimes">使用每天多打次數</label>
                </div>
                <div class="mb-3">
                    <label for="extraTimes" class="form-label">每天多打次數</label>
                    <select class="form-select" id="extraTimes" disabled>
                        <?php
                        for ($i = 0; $i <= 5; $i++) {
                            echo "<option value='$i'" . ($i === 0 ? " selected" : "") . ">$i</option>";
                        }
                        ?>
                    </select>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="useTargetDate">
                    <label class="form-check-label" for="useTargetDate">使用希望完成日期</label>
                </div>
                <div class="mb-3">
                    <label for="targetDate" class="form-label">希望完成日期</label>
                    <input type="date" class="form-control" id="targetDate" disabled>
                </div>
            </div>
        </div>
        <button type="submit" class="btn btn-primary btn-lg btn-block w-100 mb-3">計算</button>
    </form>
    <div class="row">
        <div class="col-md-12 p-3 result-section">
            <h3>計算結果</h3>
            <div id="result"></div>
        </div>
    </div>
</main>

<?php include 'footer.php'; ?>
