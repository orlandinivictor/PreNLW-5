import React from 'react';

import { HeaderBox }  from './styles';
import logo from '../../assets/Flat.png'

export default function Header() {
  const today = new Date();
  const dia = today.getDate();
  const mes = today.getMonth();
  const sem = today.getDay();

  const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  const diasSem = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

  return (
    <HeaderBox>
      <div>
        <div>
          <img src={logo} alt="Headphone Logo"/>
          <h2>Podcastr</h2>
        </div>
        <span>|</span>
        O melhor para você ouvir, sempre
      </div>
      <span>{diasSem[sem]}, {dia} {meses[mes]}</span>
    </HeaderBox>
  );
}
