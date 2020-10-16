<template>
  <transition>
    <nav class="mobile-nav__sidebar" v-if="isNavSideBarVisible">
      <ul>
        <li class="active">
          <a>Home</a>
        </li>
        <li>
          <a>Just added</a>
        </li>
        <li class="link">
          <router-link :to="{name: 'Catalogue'}">Book list</router-link>
        </li>
        <li>
          <a>Upcoming</a>
        </li>
      </ul>
    </nav>
  </transition>
  <div class='HomePage' @click="isNavSideBarVisible = false">
    <div class="top-actions">
      <header>
        <div class="container">
          <a class="top-logo">Logo</a>
          <nav class="mobile-nav">
            <i class="material-icons" @click.stop="isNavSideBarVisible = true">dehaze
            </i>
          </nav>
          <nav class="top-menu">
            <ul>
              <li class="active">
                <a>Home</a>
              </li>
              <li>
                <a>Just added</a>
              </li>
              <li class="link">
                <router-link :to="{name: 'Catalogue'}">Book list</router-link>
              </li>
              <li>
                <a>Upcoming</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
    <div class="main">
      <ui-card class="container">

        <h1>Top books</h1>

        <ui-grid class="featured-book">
          <ui-grid-col size-w="100" class="recommended ui-ta_right">
            <span>Recommended</span>
          </ui-grid-col>
          <ui-grid-col size-w-md="30">
            <img :src="require('../assets/images/01-becoming.jpg')">
          </ui-grid-col>

          <ui-grid-col size-w-md="66" class="book-info">
            <h2 class="title">Becoming</h2>
            <div class="author">Michelle Obama</div>

            <div class="synopsis">
              <p>
                In a life filled with meaning and accomplishment,
                Michelle Obama has emerged as one of the most iconic
                and compelling women of our era. As First Lady of the
                United States of America—the first African American
                to serve in that role—she helped create the most
                welcoming and inclusive White House in history, while
                also establishing herself as a powerful advocate for
                women and girls in the U.S. and around the world,
                dramatically changing the ways that families pursue
                healthier and more active lives, and standing with
                her husband as he led America through some of its
                most harrowing moments. Along the way, she showed us
                a few dance moves, crushed Carpool Karaoke, and raised
                two down-to-earth daughters under an unforgiving media
                glare.
              </p>
              <p>
                In her memoir, a work of deep reflection and mesmerizing
                storytelling, Michelle Obama invites readers into her world,
                chronicling the experiences that have shaped her—from her
                childhood on the South Side of Chicago to her years as an
                executive balancing the demands of motherhood and work, to
                her time spent at the world’s most famous address. With
                unerring honesty and lively wit, she describes her triumphs
                and her disappointments, both public and private, telling
                her full story as she has lived it—in her own words and on
                her own terms.
              </p>
            </div>
          </ui-grid-col>
        </ui-grid>


        <div class="top-voted">
          <h2>Top voted</h2>

          <ui-grid class="books-list justify-between">
            <ui-grid-col
              size-w-lg="30"
              size-w-md="30"
              size-w-sm="45"
              size-w-xs="100"
              class="book"
            >
              <span class="position">
                <span>1</span>
              </span>

              <div class="ui-ta_center">
                <img :src="require('../assets/images/02-where.jpg')">
              </div>

              <div class="book-info">
                <h3 class="title">Where the Crawdads Sing</h3>
                <div class="author">Delia Owens</div>

                <div class="synopsis">
                  <p>
                    For years, rumors of the "Marsh Girl" have haunted Barkley
                    Cove, a quiet town on the North Carolina coast. So in late
                    1969, when handsome Chase Andrews is found dead, the locals
                    immediately suspect Kya Clark, the so-called Marsh Girl. But
                    Kya is not what they say. Sensitive and intelligent, she has
                    survived for years alone in the marsh that she calls home,
                    finding friends in the gulls and lessons in the sand. Then
                    the time comes when she yearns to be touched and loved. When
                    two young men from town become intrigued by her wild beauty,
                    Kya opens herself to a new life--until the unthinkable happens.
                  </p>
                </div>
              </div>
            </ui-grid-col>


            <ui-grid-col
              size-w-lg="30"
              size-w-md="30"
              size-w-sm="45"
              size-w-xs="100"
              class="book"
            >
              <span class="position">
                <span>2</span>
              </span>

              <div class="ui-ta_center">
                <img :src="require('../assets/images/03-girl.jpg')">
              </div>

              <div class="book-info">
                <h3 class="title">
                  Girl, Wash Your Face: Stop Believing the Lies About Who You Are
                  so You Can Become Who You Were Meant to Be
                </h3>
                <div class="author">Delia Owens</div>

                <div class="synopsis">
                  <p>
                    As the founder of the lifestyle website TheChicSite.com and CEO
                    of her own media company, Rachel Hollis developed an immense
                    online community by sharing tips for better living while
                    fearlessly revealing the messiness of her own life. Now, in this
                    challenging and inspiring new book, Rachel exposes the twenty lies
                    and misconceptions that too often hold us back from living joyfully
                    and productively, lies we’ve told ourselves so often we don’t even
                    hear them anymore.
                  </p>
                </div>
              </div>
            </ui-grid-col>


            <ui-grid-col
              size-w-lg="30"
              size-w-md="30"
              size-w-sm="45"
              size-w-xs="100"
              class="book"
            >
              <span class="position">
                <span>3</span>
              </span>

              <div class="ui-ta_center">
                <img :src="require('../assets/images/04-educated.jpg')" alt="">
              </div>

              <div class="book-info">
                <h3 class="title">Educated: A Memoir</h3>
                <div class="author">Tara Westover</div>

                <div class="synopsis">
                  <p>
                    Born to survivalists in the mountains of Idaho, Tara Westover was
                    seventeen the first time she set foot in a classroom. Her family
                    was so isolated from mainstream society that there was no one to
                    ensure the children received an education, and no one to intervene
                    when one of Tara’s older brothers became violent. When another
                    brother got himself into college, Tara decided to try a new kind
                    of life. Her quest for knowledge transformed her, taking her over
                    oceans and across continents, to Harvard and to Cambridge University.
                    Only then would she wonder if she’d traveled too far, if there was
                    still a way home.
                  </p>
                </div>
              </div>
            </ui-grid-col>

          </ui-grid>
        </div>
      </ui-card>
    </div>
    <footer>
      <div class="container">
        <nav>
          <ul>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Privacy</a>
            </li>
            <li>
              <a>Terms</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: "HomePage",
    data: () => ({
      isNavSideBarVisible: false
    })
  }
</script>

<style lang="scss">
  .mobile-nav__sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: #e7e7e7;
    z-index: 999;
    box-shadow: 0 0 11px 1px #6f6f6f;
    ul {
      list-style: none;
      padding: 0 50px;
      li {
        margin: 30px 0;
        a {
          color: inherit;
          text-decoration: none;
        }
      }
    }
  }
  .HomePage {
    .main {
      margin-bottom: 50px;
    }
    .featured-book {
      margin: 0 -30px;
      padding: 15px;
      background: #b38c3917;
      .title {
        margin-top: 0;
        margin-bottom: 5px;
      }
      .recommended {
        position: relative;
        span {
          position: absolute;
          top: -13px;
          right: -16px;
          border-bottom-left-radius: 10px;
          padding: 5px;
          background: #ddaa43;
          color: #ffffff;
        }
      }
      img {
        border-radius: 10px;
        width: 100%;
      }
    }

    .top-voted {
      .book {
        position: relative;
        border-radius: 10px;
        background: #b38c3917;
        margin-bottom: 30px;
        .position {
          position: absolute;
          top: 5px;
          right: 5px;
          padding: 6px 11px;
          color: #e4b039;
          border: solid 2px #e4b039;
          border-radius: 50%;
        }
        img {
          border-radius: 10px;
          width: 50%;
        }
      }
    }

    header {
      padding: 15px;
      .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 900px;
        margin: 0 auto;
      }

      .top-logo {
        padding: 5px 60px;
        border-radius: 5px;
        background: #9c9c9c;
      }

      nav.mobile-nav {
        display: none;
      }
      nav.top-menu {
        max-width: 500px;
        ul {
          list-style: none;
          margin: 0;
          color: #2d2d2d;
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-between;
          li {
            padding: 10px;
            margin: 0 10px;
            a {
              text-decoration: none;
              color: inherit;
            }
            &.active {
              background: #ddaa43;
              color: #ffffff;
              border-radius: 10px;
            }
            &:last-of-type {
              margin-right: 0;
            }
          }
        }
      }
    }

    footer {
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      padding: 15px;
      background: #2D2D2D;
      nav {
        max-width: 450px;
        margin: 0 auto;
        ul {
          padding: 0;
          list-style: none;
          margin: 0;
          color: #fff;
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-between;
        }
      }
    }

    @media screen and (max-width: 768px) {
      header {
        nav {
          &.top-menu {
            display: none;
          }
          &.mobile-nav {
            display: block;
          }
        }
      }
    }
    @media screen and (max-width: 450px) {
      .top-voted {
        .book {
          img {
            width: 80%;
          }
        }
      }
    }
  }
</style>
