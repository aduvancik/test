<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Мій сайт</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Kameron:wght@400..700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/test/css/style.css?v=1422">
</head>

<body>
  <div class="striped-background">
    <?php require_once('components/header.php'); ?>
  </div>
  <div class="container-block">

    <section class="introSectionBook align-items-center mx-auto d-flex container">
      <?php require_once('components/introSection.php'); ?>
      <img class="book" src="/test/assets/images/theWBS.jpg" alt="WBS" w="467" h="712">
    </section>
    <section class="section-about-bsw">
      <?php require_once('components/bsw-description.php'); ?>
      <?php require_once('components/bsw-anthology.php'); ?>
      <?php require_once('components/bsw-stats.php'); ?>
      <?php require_once('components/region-availability.php'); ?>
      <div class="d-flex flex-column align-items-center text-center small-container">
        <?php require_once('components/magazine.php'); ?>
        <?php require_once('components/whats-next.php'); ?>
        <?php require_once('components/writer.php'); ?>
        <?php require_once('components/keep-in-touch.php'); ?>
      </div>
    </section>
  </div>
  <?php require_once('components/footer.php'); ?>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
<script src="/test/js/main.js"></script>

</html>