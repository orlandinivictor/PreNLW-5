import React from 'react';
import { FaPlay } from 'react-icons/fa';

import Header from '../../components/Header';
import Player from '../../components/Player';
import cardTest1 from '../../assets/cardTest1.png'
import cardTest2 from '../../assets/cardTest2.png'
import lifeIsGood from '../../assets/lifeIsGood.png'
import howProgram from '../../assets/howProgram.png'
import goLive from '../../assets/goLive.png'
import dontFall from '../../assets/dontFall.png'
import lifeIsAmazing from '../../assets/lifeIsAmazing.png'

import {Container, New, Card, All} from './styles';

export default function Home() {
  return (
    <>
      <Header />
      <Player />

      <Container>

      <New>
        <h2>
          Ultimos lançamentos
        </h2>
        <div>
          <Card>
            <img src={cardTest1} alt=""/>
            <div>
              <p>O que é um bom código?</p>
              <div>
                <span>
                  <div>Diego e Richard</div>
                  <div>8 Jan 21 • 1:35:18</div>
                </span>
                <button>
                  <FaPlay size={14} />
                </button>
              </div>
            </div>
          </Card>
          <Card>
            <img src={cardTest2} alt=""/>
            <div>
              <p>Como começar na programaçã...</p>
              <div>
                <span>
                  <div>Tiago, Diego e Pellizzetti</div>
                  <div>8 Jan 21 • 35:40</div>
                </span>
                <button>
                  <FaPlay size={14} />
                </button>
              </div>
            </div>
          </Card>
        </div>
      </New>

      <All>
        <h2>Todos os episódios</h2>
        <table>
          <thead>
            <tr>
              <th colSpan="2">PODCAST</th>
              <th>INTEGRANTES</th>
              <th>DATA</th>
              <th>DURAÇÃO</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><img src={lifeIsGood} alt=""/> </td>
              <td><span>A vida é boa</span></td>
              <td>Tiago, Diego e Pellizzetti</td>
              <td>8 Jan 21</td>
              <td>1:35:18</td>
              <td><button><FaPlay size={11} /></button></td>
            </tr>
            <tr>
              <td><img src={howProgram} alt=""/></td>
              <td><span>Como programar like a god</span></td>
              <td>Maria, Tiago e Samuel</td>
              <td>7 Jan 21</td>
              <td>35:40</td>
              <td><button><FaPlay size={11} /></button></td>
            </tr>
            <tr>
              <td><img src={goLive} alt=""/></td>
              <td><span>Bora viver!</span></td>
              <td>Diego e Richard</td>
              <td>12 Fev 21</td>
              <td>54:27</td>
              <td><button><FaPlay size={11} /></button></td>
            </tr>
            <tr>
              <td><img src={dontFall} alt=""/></td>
              <td><span>Não desista de você</span></td>
              <td>Pelpas, Pulili, Pepe e Pupa</td>
              <td>24 Mar 21</td>
              <td>1:27:11</td>
              <td><button><FaPlay size={11} /></button></td>
            </tr>
            <tr>
              <td><img src={lifeIsAmazing} alt=""/></td>
              <td><span>A vida é incrível</span></td>
              <td>B1 e B2 descendo as escadas</td>
              <td>25 Mar 21</td>
              <td>1:35:18</td>
              <td><button><FaPlay size={11} /></button></td>
            </tr>
          </tbody>
        </table>
      </All>
      </Container>
    </>
  );
}
