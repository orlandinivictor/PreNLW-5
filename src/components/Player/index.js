import React from 'react';
import { FaRandom, FaStepBackward, FaStepForward, FaPlay } from 'react-icons/fa';
import { FiRepeat } from 'react-icons/fi';

import { PlayerDiv, Header, Content, Timer, Buttons } from './styles';
import headphone from '../../assets/Headphone.svg'

export default function Player() {
  return (
    <PlayerDiv>
      <Header>
        <img src={headphone} alt="Headphone Lightning"/>
        <h3>Tocando agora</h3>
      </Header>

      <Content>
        <h3>
          Selecione um podcast para ouvir
        </h3>
      </Content>

      <Timer>
        <span>
          00:00
        </span>
        <div />
        <span>
        00:00
        </span>
      </Timer>

      <Buttons>
        <button>
          <FaRandom size={22} />
        </button>
        <button>
        <FaStepBackward size={22} />
        </button>
        <button>
        <FaPlay size={22} />
        </button>
        <button>
        <FaStepForward size={22} />
        </button>
        <button>
        <FiRepeat size={22} />
        </button>
      </Buttons>
    </PlayerDiv>
  );
}
