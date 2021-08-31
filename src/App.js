//material ui
import { Box, Container, Typography, IconButton } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
//style
import "./index.css";
import {
  BoxStlyed,
  CardStyled,
  HeaderStyled,
  ContentStyled,
  SubContentStyled,
  FooterStyled,
  ImageBox,
  FavaouriteBox,
  RoundBox,
  useStyles,
  TextStyled,
  ScoreStyled,
  AverageScore,
} from "./style";
//icons
import EngiIcon from "../src/assets/icons/engi.svg";
import HeartIcon from "../src/assets/icons/heart.svg";
import CalculateIcon from "../src/assets/icons/calculate.svg";
import CoinIcon from "../src/assets/icons/coin.svg";
import PeopleIcon from "@material-ui/icons/People";
import ShareIcon from "../src/assets/icons/share.svg";
import axios from "axios";
import { useEffect } from "react";

const App = () => {
  const classes = useStyles();

  useEffect(() => {
    onFectData()
  },[])

  const onFectData = async() => {
    const res = await axios.get('https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json')
    console.log('res :: ',res)
  }
  return (
    <Box>
      <Container maxWidth={"xs"}>
        <BoxStlyed>
          <CardStyled>
            <HeaderStyled>
              <ImageBox>
                <img src={EngiIcon} alt="faculty_icon" />
              </ImageBox>
              <Box style={{ position: "relative" }}>
                <Typography className="title" component="p">
                  คณะวิศวกรรมศาสตร์
                </Typography>
                <Typography className="sub-title" component="p">
                  สาขาวิศวกรรมทั่วไป
                </Typography>
                <Typography className="caption" component="p">
                  จุฬาลงกรณ์มหาวิทยาลัย
                </Typography>
              </Box>
              <FavaouriteBox>
                <img src={HeartIcon} alt="faculty_icon" />
              </FavaouriteBox>
            </HeaderStyled>
            <Divider />
            <ContentStyled>
              <Box style={{ display: "flex" }}>
                <Box
                  style={{
                    marginRight: 20,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography>รอบที่เปิด</Typography>
                </Box>
                <Box style={{ display: "flex" }}>
                  <RoundBox>
                    <Typography className="text">1</Typography>
                  </RoundBox>
                  <RoundBox>
                    <Typography className="text">2</Typography>
                  </RoundBox>
                  <RoundBox>
                    <Typography className="text">3</Typography>
                  </RoundBox>
                  <RoundBox>
                    <Typography className="text">4</Typography>
                  </RoundBox>
                  <RoundBox>
                    <Typography className="text">5</Typography>
                  </RoundBox>
                </Box>
              </Box>
              <TextStyled>
                <Box className="container">
                  <Box className="text">
                    <Typography>รอบที่ 4 : Admission</Typography>
                  </Box>
                  <Button variant="outlined" className={classes.button}>
                    <Typography className="text">แก้ไขคะแนน</Typography>
                    <img src={CalculateIcon} alt="icon" />
                  </Button>
                </Box>
              </TextStyled>
              <ScoreStyled>
                <Box
                  style={{
                    width: 70,
                    height: 70,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={CoinIcon} alt="icon" />
                </Box>
                <Box className="score">
                  <Typography variant="body1" className="caption">
                    คะแนนของคุณคือ
                  </Typography>
                  <Typography variant="h4" className="body1">
                    23,453
                  </Typography>
                </Box>
              </ScoreStyled>
              <Box>
                <Box
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <AverageScore>
                    <Typography className="title">20,845</Typography>
                    <Typography className="sub-title">
                      คะแนนต่ำสุด 60
                    </Typography>
                  </AverageScore>
                  <Divider orientation="vertical" flexItem />
                  <AverageScore>
                    <Typography className="title">21,345</Typography>
                    <Typography className="sub-title">
                      คะแนนเฉลี่ย 60
                    </Typography>
                  </AverageScore>
                  <Divider orientation="vertical" flexItem />
                  <AverageScore>
                    <Typography className="title">20,845</Typography>
                    <Typography className="sub-title">
                      คะแนนสูงสุด 60
                    </Typography>
                  </AverageScore>
                </Box>
              </Box>
            </ContentStyled>
            <Divider />
            <SubContentStyled>
              <Box className="Rectangle"></Box>
              <Typography className="text">ดูสัดส่วนคะแนน</Typography>
            </SubContentStyled>
            <Divider />
            <FooterStyled>
              <Box style={{ display: "flex", alignItems: "center" }}>
                <PeopleIcon
                  style={{ color: "#9b9b9b", fontSize: 18, marginRight: 5 }}
                />
                <Typography className="text">10 คนที่สนใจ</Typography>
              </Box>
              <IconButton >
                <img src={ShareIcon} alt="icon" style={{ width: 20, height: 20 }}/>
              </IconButton>
            </FooterStyled>
          </CardStyled>
        </BoxStlyed>
      </Container>
    </Box>
  );
};

export default App;
