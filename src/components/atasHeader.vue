<template>

    <!-- atas navbar -->
    <div class="atas_navbar">
      <div class="container">
        <div class="row">
          <div class="col me-5" id="telephone-email">
            <img src="../assets/gambar/Newfolder/telephone-call.png" alt="">
            <p>0821XXXX123X</p>

            <div class="email float-end">
              <img src="../assets/gambar/Newfolder/email.png" alt="">
              <p>Loremipsumdolor@gmail.com</p>
            </div>
          </div>
          <div class="col">
            <div class="media float-end">
              <div class="col">
                <a href="#" class="facebook2 ">facebook</a>
              </div>
              <div class="col">
                <a href="#" class="instagram2">instagram</a>
              </div>
              <div class="col">
                <a href="#" class="twitter2">twitter</a>
              </div>
              <div class="col">
                <a href="#" class="youtube2">youtube</a>
              </div>
              <div class="col">
                <a href="#" class="whatsapp2">whatsapp</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


</template>

<script>

    export default {
        name: 'atasHeader',
    }

</script>

<style>

    /* atas navbar */
.atas_navbar {
    width: 100%;
    height: auto;
}

@media screen and (max-width: 800px) {
.email, .media {
    width: 100%;
}

}

.atas_navbar .container {
   padding-top: 10px;
   padding-bottom: 15px;
}

.atas_navbar img {
    width: 20px;
}


.atas_navbar p {
    display: inline-block;
    font-size: 15px;
    margin-left: 10px;
}

.atas_navbar .email {
    display: inline-block;
    margin-top: -15px;
}


.atas_navbar .facebook2 {
    background-image: url(../assets/gambar/Newfolder/facebook1.png);
    background-repeat: no-repeat;
    background-size: cover;
    text-indent: -9999px;
    position: absolute;
    width: 30px;
    height: 30px;

}

.atas_navbar .instagram2 {
    background-image: url(../assets/gambar/Newfolder/instagram1.png);
    background-repeat: no-repeat;
    background-size: cover;
    text-indent: -9999px;
    position: absolute;
    width: 30px;
    height: 30px;

    margin-left: 35px;
}

.atas_navbar .twitter2 {
    background-image: url(../assets/gambar/Newfolder/twitter1.png);
    background-repeat: no-repeat;
    background-size: cover;
    text-indent: -9999px;
    position: absolute;
    width: 30px;
    height: 30px;

    margin-left: 70px;
}

.atas_navbar .youtube2 {
    background-image: url(../assets/gambar/Newfolder/youtube2.png);
    background-repeat: no-repeat;
    background-size: cover;
    text-indent: -9999px;
    position: absolute;
    width: 30px;
    height: 30px;

    margin-left: 105px;
}

.atas_navbar .whatsapp2 {
    background-image: url(../assets/gambar/Newfolder/whatsapp1.png);
    background-repeat: no-repeat;
    background-size: cover;
    text-indent: -9999px;
    position: absolute;
    width: 30px;
    height: 30px;

    margin-left: 140px;
}

</style>