import styled from "styled-components";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: 20,
    color: "#ff5a5a",
    border: "1px solid #ff5a5a",
    padding: "7px 17px",
    "& .text": {
      fontFamily: "Prompt",
      fontSize: 12,
      marginRight: 5,
    },
  },
}));

export const BoxStlyed = styled(Box)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardStyled = styled(Box)`
  width: 442px;
  // height: 493px;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
  padding: 20px;
`;

export const HeaderStyled = styled(Box)`
  padding: 0px 20px 20px 20px;
  display: flex;
  position: relative;
  .title {
    font-family: Prompt;
    font-size: 22px;
    font-weight: 600;
    color: #ff5a5a;
  }
  .sub-title {
    font-family: Prompt;
    font-size: 18px;
    line-height: 0.8;
    font-weight: 600;
    color: #9b9b9b;
  }
  .caption {
    font-family: Prompt;
    font-size: 18px;
    font-weight: 300;
    line-height: 0.8;
    color: #9b9b9b;
    position: absolute;
    bottom: 0px;
  }
`;

export const ImageBox = styled(Box)`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

export const FavaouriteBox = styled(Box)`
  position: absolute;
  right: 0px;
  top: 0px;
`;

export const ContentStyled = styled(Box)`
  padding: 18px 0px;
  .text {
    font-family: Prompt;
  }
`;

export const RoundBox = styled(Box)`
  max-width: 29px;
  height: 30px;
  margin: 0 8px 0 0;
  padding: 1px 12px 0 11px;
  background-color: #2ecc71;
  border-radius: 50%;
  margin-right: 5px;
  position: relative;
  .text {
    font-family: Prompt;
    width: 10px;
    color: white;
    line-height: 1.9;
  }
`;

export const TextStyled = styled(Box)`
  margin: 20px 0px;
  .container {
    display: flex;
    justify-content: space-between;
  }
  .text {
    display: flex;
    align-items: center;
    p {
      font-family: Prompt;
      font-weight: 600;
      color: #ff5a5a;
    }
  }
`;

export const ScoreStyled = styled(Box)`
  padding: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .score {
    position: relative;
    .caption,
    .body1 {
      font-family: Prompt;
    }
    .caption {
      position: absolute;
      top: -13px;
      right: 0px;
      font-size: 12px;
      font-weight: 300;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.33;
      letter-spacing: normal;
      text-align: right;
      color: #4a4a4a;
    }
  }
`;

export const AverageScore = styled(Box)`
  margin: auto;
  text-align: center;
  .title {
    font-family: Prompt;
    color: #5f5f5f;
    font-weight: 600;
    font-size: 18px;
  }
  .sub-title {
    font-family: Prompt;
    font-size: 12px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    color: #5f5f5f;
  }
`;

export const SubContentStyled = styled(Box)`
  padding: 17px;
  display: flex;
  align-items: center;
  .Rectangle {
    clip-path: polygon(0 0, 0% 100%, 100% 50%);
    width: 10px;
    height: 10px;
    background-color: #48b6a3;
    margin-right: 10px;
  }
  .text {
    font-family: Prompt;
    font-size: 16px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: left;
    color: #48b6a3;
  }
`;

export const FooterStyled = styled(Box)`
  padding: 10px 10px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .text {
    font-family: Prompt;
    font-size: 12px;
    font-weight: 300;
    font-stretch: normal;
    font-style: italic;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: left;
    color: #9b9b9b;
  }
`;
