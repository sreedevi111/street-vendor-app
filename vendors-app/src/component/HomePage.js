import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
// react-native-snap-carousel@4.0.0-beta.6
const logoUri = `https://cdn.discordapp.com/attachments/937719082533421067/968267612427550770/PicsArt_12-09-11.02.12.jpg`;
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselCardItem";
import data from "./data";
function Link(props) {
  return (
    <Text
      {...props}
      accessibilityRole="link"
      style={StyleSheet.compose(styles.link, props.style)}
    />
  );
}

function HomePage() {
  const isCarousel = React.useRef(null);
  const [index, setIndex] = React.useState(0);

  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <Image
          accessibilityLabel="React logo"
          source={{ uri: logoUri }}
          resizeMode="contain"
          style={styles.logo}
        />
      </View>
      <View>
        <Carousel
          layout="tinder"
          layoutCardOffset={9}
          ref={isCarousel}
          data={data}
          renderItem={CarouselCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          useScrollView={true}
        />
        <Pagination
          dotsLength={data.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: "rgba(0, 0, 0, 0.92)",
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots={true}
        />
      </View>
      <br /> <br />
      {/* <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Button
          style={{ backgroundColor: "white", color: "skyblue" }}
          onPress={() => {}}
          title="Example button"
        />
        <br />
        <Button
          style={{ backgroundColor: "white", color: "skyblue" }}
          onPress={() => {}}
          title="Example button"
        />
        <br />
        <Button
          style={{ backgroundColor: "white", color: "skyblue" }}
          onPress={() => {}}
          title="Example button"
        />
        <br />
        <Button
          style={{ backgroundColor: "white", color: "skyblue" }}
          onPress={() => {}}
          title="Example button"
        />
      </div> */}
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    // marginHorizontal: "auto",
    // maxWidth: 100,
  },
  footer: {
    // padding: "20px",
  },
  logo: {
    height: 80,
  },
  header: {
    // padding: 20,
    // display: "flex",
    // JustifyContent: "flex-start"
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center",
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center",
  },
  link: {
    color: "#1B95E0",
  },
  code: {
    fontFamily: "monospace, monospace",
  },
});

export default HomePage;
