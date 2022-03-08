<template>
  <Container>
    <Arrow direction="left" v-on:click="handleClick('left')">
      <v-icon>mdi-chevron-left</v-icon>
    </Arrow>
    <Wrapper :slideIndex="slideIndex">
      <Slide v-for="(item, key) in sliderItems" :key="key" :bg="item.bg">
        <ImgContainer>
          <Img :src="item.img"></Img>
        </ImgContainer>
        <InfoContainer>
          <Title>{{ item.title }}</Title>
          <Desciption>{{ item.desc }}</Desciption>
          <Button>SHOW NOW</Button>
        </InfoContainer>
      </Slide>
    </Wrapper>
    <Arrow direction="right" v-on:click="handleClick('right')">
      <v-icon>mdi-chevron-right</v-icon>
    </Arrow>
  </Container>
</template>

<script>
import { sliderItems } from "../data";
import {
  Container,
  Wrapper,
  Arrow,
  Slide,
  InfoContainer,
  ImgContainer,
  Img,
  Title,
  Desciption,
  Button,
} from "./style";

export default {
  name: "Slider",
  data: function () {
    return {
      sliderItems,
      slideIndex: 0,
    };
  },
  methods: {
    handleClick: function (direction) {
      if (direction === "left") {
        this.slideIndex = this.slideIndex > 0 ? this.slideIndex - 1 : 2;
      } else {
        this.slideIndex = this.slideIndex < 2 ? this.slideIndex + 1 : 0;
      }
    },
  },

  components: {
    Container,
    Wrapper,
    Arrow,
    Slide,
    InfoContainer,
    ImgContainer,
    Img,
    Title,
    Desciption,
    Button,
  },
};
</script>