import { ImageList, ImageListItem } from "@mui/material";
import InfoCard from "components/ui/InfoCard";
import { ReactElement } from "react";
import one from "images/one.jpg";
import two from "images/two.jpg";
import three from "images/three.jpg";
// 4 is png
import four from "images/four.png";
import five from "images/five.jpg";
import six from "images/six.jpg";
import seven from "images/seven.jpg";
import Flex from "components/ui/Flex";

export default function Gallery(): ReactElement {
  return (
    <Flex>
      <InfoCard
        sx={{
          maxWidth: "80rem",
          height: "100%",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Flex
          sx={{
            px: "4.8rem",
            justifyContent: "center",
          }}
        >
          Here are some photos of residents and visitors enjoying the community
          of Burnt River.
        </Flex>
        <ImageList
          sx={{ width: 500, height: 450, overflow: "auto" }}
          cols={3}
          rowHeight={164}
        >
          <ImageListItem>
            <img
              alt="No alt text yet"
              src={`${one}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${one}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              alt="No alt text yet"
              src={`${two}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${two}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              alt="No alt text yet"
              src={`${three}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${three}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              alt="No alt text yet"
              src={`${four}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${four}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              alt="No alt text yet"
              src={`${five}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${five}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              alt="No alt text yet"
              src={`${six}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${six}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              alt="No alt text yet"
              src={`${seven}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${seven}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              loading="lazy"
            />
          </ImageListItem>
        </ImageList>
      </InfoCard>
    </Flex>
  );
}
