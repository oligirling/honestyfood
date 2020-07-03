<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Honesty Bar</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body class="blue">
<div id="devMenu" class="modal-toggle"></div>

<div id="container">
    <div class="pour"></div>
    <div id="beaker">
        <div class="beer-foam">
            <div class="foam-1"></div>
            <div class="foam-2"></div>
            <div class="foam-3"></div>
            <div class="foam-4"></div>
            <div class="foam-5"></div>
            <div class="foam-6"></div>
            <div class="foam-7"></div>
        </div>

        <div id="liquid">

            <div class="bubble bubble1"></div>
            <div class="bubble bubble2"></div>
            <div class="bubble bubble3"></div>
            <div class="bubble bubble4"></div>
            <div class="bubble bubble5"></div>
        </div>
    </div>
</div>

<div class="center-elements">
    <h2 class="main-text">Scan your wristband before pouring a pint</h2>
    <form id="pay">
        <input class="dev-element hidden user-barcode" name="user-barcode" id="user-barcode">
        <button class="dev-element hidden dev-button" type="submit">Submit</button>
    </form>
    <div class="generate-button hidden">
        <button class="dev-button" id="generate-btn">Generate</button>
    </div>
</div>

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
                <input type="checkbox" id="showInputSubmit"><label for="showInputSubmit"> Show input & submit</label><br>
                <input type="checkbox" id="showGenerateButton"><label for="showGenerateButton"> Show generate button</label><br>
                <br><br>
                <div class="add-human hidden">
                    <form id="add-human-form">
                        <input class="dev-button" placeholder="First name" name="f-name">
                        <input class="dev-button" placeholder="Last name" name="l-name">
                        <select class="dev-button" name="gender">
                            <option>--- Gender ---</option>
                            <option value="m">Male</option>
                            <option value="f">Female</option>
                        </select>
                        <button class="add-begin" type="submit">Add being</button>
                    </form>
                </div>
                <a href="/leaderboard.php">
                    <button>View leaderboard</button>
                </a>
                <button id="add-human">Add Human</button>
                <button id="refresh-page">Refresh Page</button>
            </div>
        </div>
    </div>
</div>
</body>
</html>
<script type="text/javascript" src="js/jquery-3.5.1.min.js"></script>
<script type="text/javascript" src="js/home.js"></script>
