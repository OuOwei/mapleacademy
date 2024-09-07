<nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
    <div class="container-fluid">
        <a class="navbar-brand" href="index.php">楓之谷怪物公園</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link <?php echo $currentPage === 'home' ? 'active' : ''; ?>" href="index.php">首頁</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link <?php echo $currentPage === 'calculator' ? 'active' : ''; ?>" href="calculator.php">勳章計算器</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
