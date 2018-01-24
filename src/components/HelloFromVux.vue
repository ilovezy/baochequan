<template>
  <div>
    <x-header :left-options="{backText: ''}">快捷登陆</x-header>

    <box class="container" gap="10px 0 0 0">
      <div class="logo">
        <img src="" alt="">
        <div class="text">包车圈</div>
      </div>

      <div class="login-form-wrap">
        <div class="form-group phone">
          <icon type="success"></icon>
          <input type="number" placeholder="请输入手机号">
        </div>
        <div class="form-group sms-code">
          <icon type="info"></icon>
          <input type="number" placeholder="请输入验证码">
          <span class="btn">获取验证码</span>
        </div>
      </div>

      <div v-transfer-dom>
        <x-dialog v-model="showHideOnBlur" class="dialog-demo"  hide-on-blur>
          <div class="img-box">
            <h1>用户协议</h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur facilis non quos. Corporis, fugit, maxime. Ab aspernatur beatae eius eum nobis omnis optio provident quisquam quo ratione, sunt ullam velit.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet aspernatur assumenda consequatur corporis, itaque mollitia pariatur quaerat quo repellat rerum sed tempore. Assumenda fugiat, iste maiores nesciunt optio quam repellendus vero. Expedita fuga laudantium nesciunt non optio quod sapiente sequi ullam. Aperiam cumque fugit nemo nihil, non quasi qui!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus ad adipisci aliquam architecto, asperiores commodi consequatur dolore doloremque error esse eveniet fuga harum in iure, laudantium, nemo nostrum quasi qui quisquam ratione suscipit tempore tenetur vero voluptatum! Consectetur eligendi eos fugit modi molestias non odit optio perferendis provident quaerat qui, reprehenderit tenetur voluptate? Ex fugiat impedit mollitia necessitatibus nemo odit soluta vel! Aliquid commodi doloribus fugiat iste itaque quia recusandae saepe similique tempora vero! Adipisci assumenda dicta dolores eius exercitationem inventore molestias nam nobis nostrum odit officiis optio, perspiciatis possimus quisquam repudiandae sit sunt tempore unde voluptatem voluptatum.
          </div>
          <div @click="showHideOnBlur=false">
            <span class="vux-close"></span>
          </div>
        </x-dialog>
      </div>

      <div class="notice">
        <label>
          <input type="checkbox"> 我已阅读并同意 <span class="link" @click="openDialog()">《包车圈用户使用协议》</span>
        </label>
      </div>

      <x-button type="primary">登 录</x-button>
    </box>
  </div>
</template>

<script>
  import {XHeader, Box, TransferDom, XButton, Icon, XInput,XDialog} from 'vux'

  export default {
    directives: {
      TransferDom
    },
    components: {
      XHeader, XButton, Box, XInput, Icon,XDialog
    },
    data() {
      return {
        menus: {
          menu1: 'Take Photo',
          menu2: 'Choose from photos'
        },
        showMenus: false,
        showHideOnBlur:false,
      }
    },
    methods: {
      openDialog() {
        this.showHideOnBlur = true
      }
    }
  }
</script>

<style lang="less">
  @theme-color: #EF5A48;
  @basic-border-color: #D5D5D5;

  .container {
    background: #fff;
    padding: 15px 15px 150px 15px;

    .logo {
      margin-top: 15px;
      margin-bottom: 40px;
      text-align: center;
      img {
        display: inline-block;
        width: 60px;
        height: 60px;
        margin-bottom: 10px;
        background: @theme-color;
      }

      .text {
        font-size: 30px;
        font-weight: bold;
      }
    }

    .login-form-wrap {
      border: 1px solid @basic-border-color;
      border-radius: 4px;
      margin-bottom: 40px;

      .phone {
        border-bottom: 1px solid @basic-border-color;
      }

      .form-group {
        height: 50px;
        line-height: 50px;
        display: flex;

        .weui-icon {
          width: 50px;
          text-align: center;
          line-height: 50px;
        }

        input {
          background: none;
          border: 0;
          outline: none;
          flex: 1;
          font-size: 16px;
          width: 140px;
        }

        .btn {
          color: @theme-color;
          display: inline-block;
          padding-right: 15px;
          background: none;
        }
      }
    }

    .notice {
      margin-bottom: 15px;
      color: #555555;

      input {
        width: 16px;
        height: 16px;
        position: relative;
        top: 2px;
      }
      .link {
        color: #44A3F3;
      }
    }

  }

  button.weui-btn {
    height: 50px;
    line-height: 50px;
  }

</style>
