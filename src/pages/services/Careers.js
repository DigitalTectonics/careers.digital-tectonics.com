import React from "react";
import { Grid } from "@mui/material";
import Card from "../../components/Card/Card";
import { CardsContainer, CareersContainer } from "./styles";
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
        <Grid container spacing="40">
          {cards.map((card) => {
            return (
              <Grid item xs={12} md={6}>
                <Card
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
