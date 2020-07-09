<?php
require __DIR__ . '/../vendor/autoload.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>History</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body class="page-leaderboard yellow">

    <div id="devMenu" class="modal-toggle"></div>

    <section class="ranking">
        <div class="contain">
            <h2 class="main-text">Recent history</h2>
            <div class="ranking-table">
                <div class="ranking-table-header-row">
                    <div class="ranking-table-header-data h6">Timestamp</div>
                    <div class="ranking-table-header-data h6">Name</div>
                    <div class="ranking-table-header-data h6">Product</div>
                </div>
                <div class="ranking-table-body">
                    <?php foreach ((new \Honest\Kitchen())->getHistory() as $item) :?>
                        <div class="ranking-table-row">
                            <div class="ranking-table-data">
                                <?php echo $item->created_at ?>
                            </div>
                            <div class="ranking-table-data">
                                <?php echo $item->person ?>
                            </div>
                            <div class="ranking-table-data">
                                <?php echo $item->food ?>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </section>


    <div class="modal">
        <div class="modal-overlay modal-toggle"></div>
        <div class="modal-wrapper modal-transition">
            <div class="modal-header">
                <button class="modal-close modal-toggle">
                    x
                </button>
                <h3 class="modal-heading">Menu</h3>
            </div>

            <div class="modal-body">
                <div class="modal-content">
                    <br><br>
                    <a href="/">
                        <button>View home</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
<script type="text/javascript" src="js/jquery-3.5.1.min.js"></script>
<script type="text/javascript" src="js/home.js"></script>
