import { Divider } from "antd";
import React from "react";
import { EditorialTitle } from "./editorial-title";

export const EditorialPage = () => {
  
  const calculateDaysBetweenWeeks = () => {
    // this method calculate days between weeks
  }

  return (
    <>
      <EditorialTitle />
      <Divider />
      <p style={{ fontSize: "18px", lineHeight: "35px" }}>
        Va a quedar para la historia. Se la contarán de generación en
        generación. Privilegiado el que pudo vivirla y mucho más el que pudo ir
        a ver ese partido al estadio. Es que no fue un partido más. Fue la final
        más importante de todas. ¿Qué hincha no desea ver ganar al club de sus
        amores una final, de la copa continental más importante del continente y
        que salga campeón por vencer en la final al rival de toda la vida?
        Todos. Imaginar una final de Copa Libertadores entre River Plate y Boca
        Juniors era algo impensado, hasta hace un tiempo atrás, ya que los
        equipos de un mismo país debían eliminarse en semifinales para que la
        final sea entre dos clubes de distintos países. Sin embargo, en 2018 se
        dio. Ese 2018 fue mágico para River. Estuvo tocado por la varita mágica.
        No lo entrenaba un mago, sino Marcelo Gallardo. Un simple hombre, un
        mortal, aunque muy capacitado. Pero ese efecto de varita mágica en el
        2018 no fue algo de pura casualidad, sino que se dio como fruto de un
        importante trabajo y compromiso que llevó adelante el plantel y el
        cuerpo técnico. Ya venían de ganarle una final de Supercopa Argentina al
        Xeneize en marzo y a fin de ese año debía enfrentarlo nuevamente en una
        final, ni más ni menos que de Copa Libertadores. La madre de todas las
        finales. La más importante de la historia. Era un ante un Boca que venía
        entonado (había dejado afuera a Palmeiras de Brasil, con mucha
        autoridad) y con sed de revancha. Mientras que River seguía con la
        seriedad de equipo característica de estos últimos tiempos. Nada más y
        nada menos había eliminado a Gremio de Brasil, vigente campeón de
        América de ese tiempo. Un equipo que no era duro. Era durísimo. Así y
        todo, el Millonario lo dejó afuera de la Libertadores, en condición de
        visitante. La pregunta era: ¿Estaba Argentina preparada para afrontar
        una final de Copa Libertadores entre los dos clubes más importante del
        país? La respuesta es no. Ya se explicará y demostrará más adelante. Sin
        embargo, nada podía parar esa tremenda cita futbolística, que no solo
        repercutía a nivel nacional, sino que también lo hacía a nivel mundial.
        El partido de ida se jugó en La Bombonera, en la cancha de Boca. Una ola
        de hinchas del Xeneize colmaron el escenario y reventaron el estadio,
        con gritos ensordecedores. Era un escenario imponente y Gonzalo Pity
        Martínez los miraba desafiantemente a los aficionados del club, al
        entrar a la cancha. Nada intimidó al equipo de Gall
      </p>
      <Divider />
      <p
        style={{
          textAlign: "center",
          marginBottom: "0px",
          color: "rgb(180,180,180)",
          paddingBottom: "100px",
        }}
      >
        Esta fue la Tapa de Ole ese día
      </p>
    </>
  );
};
