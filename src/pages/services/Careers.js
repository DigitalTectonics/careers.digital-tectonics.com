import React from "react";
import { Grid } from "@mui/material";
import Card from "../../components/Card/Card";
import { CardsContainer, CareersContainer, HeaderText } from "./styles";
import { cards } from "./card_data";

export default function Careers() {
  return (
    <CareersContainer
      id="careers"
      sx={{
        backgroundColor: "primary.main",
      }}
    >
      <CardsContainer
        elevation={4}
        sx={{
          borderColor: "primary.text",
          backgroundColor: "primary.landing",
        }}
      >
        <HeaderText
          letterSpacing="0.1rem"
          color="primary.text"
          fontWeight="700"
          textAlign="center"
          fontFamily="poppins"
        >
          Digital Tectonics, LLC
        </HeaderText>
        <Grid container spacing="20">
          {cards.map((card) => {
            return (
              <Grid item xs={12} md={6}>
                <Card
                  image={card.image}
                  header={card.header}
                  description={card.description}
                  button={card.button}
                />
              </Grid>
            );
          })}
        </Grid>
      </CardsContainer>
    </CareersContainer>
  );
}
