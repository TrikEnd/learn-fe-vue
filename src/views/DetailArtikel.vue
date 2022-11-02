
<template>


          <atasHeader />
          <Header />

  

        
          <!-- gambar -->
          <div class="gambar">
            <img class="img-fluid"  src="../assets/gambar/backgrounnd_pengumuman.jpg" alt="">
          </div>

          <div class="judul_artikel">
            <h1>Lorem, ipsum dolor.</h1>
            <hr>
          </div>
          <div class="artikel">
          <div class="container">

            <div class="isi_artikel">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis ratione quibusdam magni laborum error minus doloribus tempore repellat a quasi, eos magnam eius praesentium incidunt neque voluptatem iste ex! Nobis deserunt obcaecati numquam! Et ipsum consectetur distinctio delectus ratione asperiores, cum, ipsam debitis harum, repellendus dolorum iusto error magni culpa itaque quaerat eveniet aspernatur tenetur blanditiis? Recusandae accusantium libero voluptate ipsa asperiores sunt ipsum rem harum cumque debitis? Ullam accusamus reprehenderit quis laborum. Necessitatibus, doloribus? Nesciunt quasi harum iste porro voluptatem blanditiis doloribus maxime distinctio omnis? Quisquam in, beatae ipsam tenetur modi dicta culpa amet error cupiditate quis aspernatur corrupti neque veniam? Illo ipsam laborum impedit quas recusandae doloribus earum? Nihil id rem quidem soluta eos libero illo dignissimos odit numquam ipsa temporibus iste fugit aliquid omnis expedita aliquam harum, velit qui minima ad cum ducimus. Error nesciunt, atque quas, explicabo ex saepe corporis aliquam quam minus in porro quibusdam consequuntur, quidem ipsa neque! Ullam sed officiis aspernatur autem magni, provident quam omnis voluptates, et, harum architecto. Ea ipsam est vel saepe officia. Saepe recusandae iure doloribus voluptatum itaque quis? Beatae aperiam, consequatur ab est dolorum et sapiente veritatis ipsa esse veniam nisi asperiores explicabo debitis, nostrum fugit unde velit!</p>
              <br>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis impedit veritatis odit quam fugiat maxime. Commodi amet inventore aut ad cupiditate? In omnis eos ipsum, odio minima cum ad placeat molestiae iure voluptates. Eius maiores porro inventore hic, voluptatum beatae deserunt! Optio enim id voluptatum, velit, esse eveniet, harum dignissimos sed aliquam est quo beatae ipsam nam. Officiis harum odit adipisci minima esse exercitationem, repellat soluta maiores nulla. Nobis quas ratione, optio rem error eos accusantium deserunt, voluptates beatae ea quaerat voluptate velit. Error sit, id ipsam expedita consectetur, asperiores, et iusto at necessitatibus pariatur voluptas. Consequatur earum eligendi fugiat rerum libero quas id reiciendis impedit, quia repellat natus, odio autem ipsum magnam ex! Non repellat ullam modi, nemo doloremque adipisci beatae exercitationem quas quibusdam. Voluptatibus placeat maiores assumenda officiis, quos cupiditate hic totam necessitatibus amet omnis excepturi fugit, eveniet architecto. Ipsam, fugiat? Corporis repellat nisi laboriosam perspiciatis cumque repellendus!</p>
            </div>
          </div>
          
        </div>


        <!-- komentar -->
        <div class="komentar">
          <div class="container">
            <div class="col-md-12" id="fbcomment">
              <div class="header_comment">
                <div class="row">
                  <div class="col-md-6 text-left">
                    <span class="count_comment">264235 Comments</span>
                  </div>
                  <div class="col-md-6 text-right">
                    <span class="sort_title">Sort by</span>
                    <select class="sort_by">
                    <option>Top</option>
                    <option>Newest</option>
                    <option>Oldest</option>
                    </select>
                  </div>
                </div>
              </div>
        
              <div class="body_comment">
                <div class="row">
                  <div class="avatar_comment col-md-1">
                    <img src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg" alt="avatar"/>
                  </div>
                  <div class="box_comment col-md-11">
                    <textarea class="commentar" placeholder="Add a comment..."></textarea>
                    <div class="box_post">
                    <div class="pull-left">
                      <input type="checkbox" id="post_fb"/>
                      <label for="post_fb">Also post on Facebook</label>
                    </div>
                    <div class="pull-right">
                      <span>
                      <img src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg" alt="avatar" />
                      <i class="fa fa-caret-down"></i>
                      </span>
                      <button onclick="submit_comment()" type="button" value="1">Post</button>
                    </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <ul id="list_comment" class="col-md-12">
                    <!-- Start List Comment 1 -->
                    <li class="box_result row">
                      <div class="avatar_comment col-md-1">
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg" alt="avatar"/>
                      </div>
                      <div class="result_comment col-md-11">
                        <h4>Nath Ryuzaki</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                        <div class="tools_comment">
                          <a class="like" href="#">Like</a>
                          <span aria-hidden="true"> · </span>
                          <a class="replay" href="#">Reply</a>
                          <span aria-hidden="true"> · </span>
                          <i class="fa fa-thumbs-o-up"></i> <span class="count">1</span> 
                          <span aria-hidden="true"> · </span>
                          <span>26m</span>
                        </div>
                        <ul class="child_replay">
                          <li class="box_reply row">
                            <div class="avatar_comment col-md-1">
                              <img src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg" alt="avatar"/>
                            </div>
                             <div class="result_comment col-md-11">
                              <h4>Sugito</h4>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                              <div class="tools_comment">
                                <a class="like" href="#">Like</a>
                                <span aria-hidden="true"> · </span>
                                <a class="replay" href="#">Reply</a>
                                <span aria-hidden="true"> · </span>
                                <i class="fa fa-thumbs-o-up"></i> <span class="count">1</span> 
                                <span aria-hidden="true"> · </span>
                                <span>26m</span>
                              </div>
                              <ul class="child_replay"></ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    
                    <!-- Start List Comment 2 -->
                    <li class="box_result row">
                      <div class="avatar_comment col-md-1">
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg" alt="avatar"/>
                      </div>
                      <div class="result_comment col-md-11">
                        <h4>Gung Wah</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                        <div class="tools_comment">
                          <a class="like" href="#">Like</a>
                          <span aria-hidden="true"> · </span>
                          <a class="replay" href="#">Reply</a>
                          <span aria-hidden="true"> · </span>
                          <i class="fa fa-thumbs-o-up"></i> <span class="count">1</span> 
                          <span aria-hidden="true"> · </span>
                          <span>26m</span>
                        </div>
                        <ul class="child_replay"></ul>
                      </div>
                    </li>
                  </ul>
                <button class="show_more" type="button">Load 10 more comments</button>
                </div>
              </div>
            </div>
          </div>
      </div>


         <!-- artikel dan berita -->
  <div class="berita">
    <div class="container">
        <div class="judul">
            <h1>Artikel dan Berita</h1>
        <p>Artikel dan Berita Terbaru</p>
        </div>
        
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="card">
                <img src="../assets/gambar/berita1.jpeg" class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="../assets/gambar/berita2.jpeg" class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="../assets/gambar/event1.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  </div>
</div>



   

      

    


<Footer />

</template>


<script>

import atasHeader from '@/components/atasHeader.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: "DetailArtikel",

  components: {
    atasHeader,
    Footer,
    Header,
  }
  
}

</script>

<style>

 @import '../assets/styleArtikel.css';

</style>