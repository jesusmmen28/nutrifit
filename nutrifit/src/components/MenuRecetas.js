import React, { useState } from "react";
import EnsaladaPolloAguacate from "../images/ensaladaPolloAguacate.png";
import salmon from "../images/salmon.png";
import garbanzos from "../images/garbanzos.png";
import pavo from "../images/pavo.png";
import platanoYAvena from "../images/platanoYAvena.png";
import "./menuRecetas.css";

export const MenuRecetas = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const handleMenuItemClick = (index) => {
    setActiveMenuItem(index);
  };

  return (
    <div className="titulosReceta">
      <h3 className="titulosReceta1" onClick={() => handleMenuItemClick(0)}>
        Ensalada de pollo y aguacate
      </h3>
      {activeMenuItem === 0 && (
        <>
          <article>
            <figure>
              <img
                className="imgRecetas1"
                src={EnsaladaPolloAguacate}
                alt="EnsaladaPolloAguacate"
              />
            </figure>
            <h4 className="h4Recetas">Ingredientes:</h4>
            <ul className="listaRecetas">
              <li>
                1 pechuga de pollo deshuesada y sin piel, cortada en tiras
              </li>
              <li>2 tazas de espinacas frescas</li>
              <li>1 aguacate maduro, cortado en cubos</li>
              <li>1 taza de tomates cherry, cortados por la mitad</li>
              <li>1/4 taza de cebolla roja, picada</li>
              <li>1/4 taza de nueces picadas</li>
              <li>2 cucharadas de aceite de oliva</li>
              <li>1 cucharada de vinagre balsámico</li>
              <li>Sal y pimienta negra recién molida, al gusto</li>
            </ul>
            <h4 className="h4Recetas">Instrucciones:</h4>
            <ol className="listaRecetas olRecetas">
              <li>Precalienta el horno a 200°C.</li>
              <li>
                Coloca las tiras de pollo en una bandeja para hornear y sazona
                con sal y pimienta. Rocía con una cucharada de aceite de oliva y
                hornea durante 20-25 minutos o hasta que el pollo esté
                completamente cocido.
              </li>
              <li>
                En un tazón grande, mezcla las espinacas, el aguacate, los
                tomates cherry, la cebolla roja y las nueces picadas.
              </li>
              <li>
                En un tazón pequeño, mezcla la cucharada de aceite de oliva
                restante con el vinagre balsámico y un poco de sal y pimienta.
              </li>
              <li>Agrega el pollo cocido a la ensalada y mezcla bien.</li>
              <li>
                Agrega el aderezo y mezcla nuevamente para cubrir toda la
                ensalada.
              </li>
              <li>
                Sirve inmediatamente y disfruta de tu deliciosa y saludable
                ensalada de pollo y aguacate.
              </li>
            </ol>
          </article>
        </>
      )}
      <h3 className="titulosReceta1" onClick={() => handleMenuItemClick(1)}>
        Salmón al horno con verduras asadas
      </h3>
      {activeMenuItem === 1 && (
        <>
          <article>
            <figure>
              <img
                className="imgRecetas1"
                src={salmon}
                alt="salmon"
              />
            </figure>
            <h4 className="h4Recetas">Ingredientes:</h4>
            <ul className="listaRecetas">
              <li>1 filete de salmón</li>
              <li>1 taza de brócoli en floretes</li>
              <li>1/2 taza de zanahorias baby</li>
              <li>1/2 taza de calabacín, cortado en cubos</li>
              <li>1 cucharada de aceite de oliva</li>
              <li>Sal y pimienta al gusto</li>
              <li>Zumo de 1/2 limón</li>
            </ul>
            <h4 className="h4Recetas">Instrucciones:</h4>
            <ol className="listaRecetas olRecetas">
              <li>Precalienta el horno a 200°C.</li>
              <li>
                Coloca el salmón en una bandeja para hornear y sazona con sal y
                pimienta.
              </li>
              <li>
                En un tazón, mezcla el brócoli, las zanahorias y el calabacín
                con aceite de oliva, sal y pimienta.
              </li>
              <li>
                Coloca las verduras alrededor del salmón en la bandeja para
                hornear.
              </li>
              <li>Rocía el zumo de limón sobre el salmón y las verduras.</li>
              <li>
                Hornea durante 12-15 minutos o hasta que el salmón esté cocido y
                las verduras estén doradas.
              </li>
            </ol>
          </article>
        </>
      )}

      <h3 className="titulosReceta1" onClick={() => handleMenuItemClick(2)}>
        Ensalada de garbanzos y tomate
      </h3>
      {activeMenuItem === 2 && (
        <>
          <article>
            <figure>
              <img
                className="imgRecetas1"
                src={garbanzos}
                alt="garbanzos"
              />
            </figure>
            <h4 className="h4Recetas">Ingredientes:</h4>
            <ul className="listaRecetas">
              <li>1 lata de garbanzos, enjuagados y escurridos</li>
              <li>1 taza de tomates cherry, cortados por la mitad</li>
              <li>1/4 de taza de cebolla roja, picada</li>
              <li>1/4 de taza de pimiento rojo, cortado en cubos</li>
              <li>1/4 de taza de cilantro fresco, picado</li>
              <li>1 cucharada de zumo de limón fresco</li>
              <li>2 cucharadas de aceite de oliva</li>
              <li>Sal y pimienta al gusto</li>
            </ul>
            <h4 className="h4Recetas">Instrucciones:</h4>
            <ol className="listaRecetas olRecetas">
              <li>
                En un tazón grande, mezcla los garbanzos, los tomates cherry, la
                cebolla roja, el pimiento rojo y el cilantro.
              </li>
              <li>
                En un tazón pequeño, mezcla el aceite de oliva, el jugo de
                limón, la sal y la pimienta.
              </li>
              <li>
                Vierte la mezcla de aderezo sobre la ensalada y revuelve bien.
              </li>
              <li>
                Sirve frío o a temperatura ambiente. Puedes agregar aguacate o
                queso feta si lo deseas.
              </li>
            </ol>
          </article>
        </>
      )}

      <h3 className="titulosReceta1" onClick={() => handleMenuItemClick(3)}>
        Pavo al horno con vegetales
      </h3>
      {activeMenuItem === 3 && (
        <>
          <article>
            <figure>
              <img
                className="imgRecetas1"
                src={pavo}
                alt="pavo"
              />
            </figure>
            <h4 className="h4Recetas">Ingredientes:</h4>
            <ul className="listaRecetas">
              <li>1 pechuga de pavo (de 800 gramos a 1 kilogramo)</li>
              <li>1 cucharada de hierbas provenzales secas</li>
              <li>1 cucharadita de ajo en polvo</li>
              <li>1 calabacín, cortado en cubos</li>
              <li>1 zanahoria, pelada y cortada en cubos</li>
              <li>1 cebolla roja, cortada en cuartos</li>
              <li>2 cucharadas de aceite de oliva</li>
              <li>1 pimiento rojo, sin semillas y cortado en cubos</li>
              <li>Sal y pimienta negra recién molida, al gusto</li>
            </ul>
            <h4 className="h4Recetas">Instrucciones:</h4>
            <ol className="listaRecetas olRecetas">
              <li>Precalienta el horno a 200°C.</li>
              <li>
                En un tazón pequeño, mezcla el aceite de oliva, las hierbas
                provenzales, el ajo en polvo, la sal y la pimienta.
              </li>
              <li>
                Coloca la pechuga de pavo en una bandeja para hornear y cepilla
                la mezcla de aceite y especias sobre la superficie del pavo.
              </li>
              <li>
                En un tazón grande, mezcla el calabacín, la zanahoria, la
                cebolla y el pimiento rojo con una cucharada de la mezcla de
                aceite y especias.
              </li>
              <li>
                Distribuye las verduras alrededor del pavo en la bandeja para
                hornear.
              </li>
              <li>
                Hornea durante 40-50 minutos o hasta que el pavo esté cocido y
                las verduras estén tiernas.
              </li>
              <li>
                Deja reposar el pavo durante 5-10 minutos antes de cortarlo en
                rodajas y servir junto con las verduras asadas.
              </li>
            </ol>
          </article>
        </>
      )}

      <h3 className="titulosReceta1" onClick={() => handleMenuItemClick(4)}>Batido de plátano y avena</h3>
      {activeMenuItem === 4 && (
        <>
          <article>
            <figure>
              <img
                className="imgRecetas1"
                src={platanoYAvena}
                alt="platanoYAvena"
              />
            </figure>
            <h4 className="h4Recetas">Ingredientes:</h4>
            <ul className="listaRecetas">
              <li>2 plátanos maduros</li>
              <li>1/2 taza de avena en hojuelas</li>
              <li>1 taza de leche de almendras sin endulzar</li>
              <li>1 cucharada de mantequilla de maní natural</li>
              <li>1/2 cucharadita de canela molida</li>
            </ul>
            <h4 className="h4Recetas">Instrucciones:</h4>
            <ol className="listaRecetas olRecetas">
              <li>
                Agrega todos los ingredientes en una licuadora y mezcla hasta
                que quede suave.
              </li>
              <li>Vierte el batido en un vaso y sirve.</li>
            </ol>
          </article>
        </>
      )}
    </div>
  );
};
