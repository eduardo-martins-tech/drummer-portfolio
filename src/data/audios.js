import ddJunior from "../assets/images/dd-junior.png";
import lexGo from "../assets/images/lex-go-2015.png";
import lexSeLiga from "../assets/images/lex-se-liga-2012.png";
import lexForaCaixa from "../assets/images/lex-fora-da-caixa-2019.png";

import marcelaCabeloSolto from "../assets/images/marcela-tais-cabelo-solto-2011.png";
import marcelaModerno from "../assets/images/marcela-tais-moderno-a-moda-antiga-2015.png";

import nadiaSantolli from "../assets/images/nadia-santolli-2017.png";

import alineSilva from "../assets/images/aline-silva-uma-nova-luz-2017.png";

import bispoAlegria from "../assets/images/bispo-rodovalho-alegria-verdadeira-2014-aovivo.png";
import bispoEntra from "../assets/images/bispo-rodovalho-entra-no-meu-lar-2011-aovivo.png";
import bispoMilagre from "../assets/images/bispo-rodovalho-faz-o-meu-milagre-2012-aovivo.png";
import bispoSara from "../assets/images/bispo-rodovalho-sara-nossa-terra-por-favor-2015-aovivo.png";
import bispoSeguindo from "../assets/images/bispo-rodovalho-seguindo-em-frente-2011-aovivo.png";

import helioAlem from "../assets/images/helio-borges-alem-do-veu-2015.png";
import helioGloria from "../assets/images/helio-borges-vem-com-tua-gloria-2017.png";

import monicaVaz from "../assets/images/monica-vaz-sobrenatural-2015.png";

import danielJuanLeao from "../assets/images/daniel-juan-leao-2019.png";

import supernovaBrisa from "../assets/images/supernovavida-brisa-2015.png";
import supernovaDvd from "../assets/images/supernovavida-dvd-aovivo-2010.png";
import supernovaFavor from "../assets/images/supernovavida-favor-de-deus-2012.png";
import supernovaForca from "../assets/images/supernovavida-forca-das-aguas-2002.png";
import supernovaNaoPara from "../assets/images/supernovavida-nao-para-nao-2015.png";

const audios = [
  {
    id: "dd-junior-eu-vou-pra-cima",
    year: 2015,
    title: "Eu Vou pra Cima",
    artist: "DD Junior",
    cover: ddJunior,
    preview: null,
    spotifyUrl: "",
  },

  {
    id: "lex-se-liga-na-visao",
    year: 2012,
    title: "Se Liga na Visão",
    artist: "LEX",
    cover: lexSeLiga,
    preview: null,
    spotifyUrl: "",
  },

  {
    id: "lex-go",
    year: 2015,
    title: "Lex Go",
    artist: "LEX",
    cover: lexGo,
    preview: null,
    spotifyUrl: "",
  },

  {
    id: "lex-fora-da-caixa",
    year: 2019,
    title: "Fora da Caixa",
    artist: "LEX",
    cover: lexForaCaixa,
    preview: null,
    spotifyUrl: "",
  },

  {
    id: "daniel-juan-leao",
    year: 2019,
    title: "Leão",
    artist: "Daniel Juan Leão",
    cover: danielJuanLeao,
    preview: null,
    spotifyUrl: "",
  },

  {
    id: "marcela-tais-cabelo-solto",
    year: 2011,
    title: "Cabelo Solto",
    artist: "Marcela Taís",
    cover: marcelaCabeloSolto,
    preview: null,
    spotifyUrl: "",
  },

  {
    id: "marcela-tais-moderno-a-moda-antiga",
    year: 2015,
    title: "Moderno à Moda Antiga",
    artist: "Marcela Taís",
    cover: marcelaModerno,
    preview: null,
    spotifyUrl: "",
  },

  {
    id: "nadia-santolli-o-seu-amor-e-tudo",
    year: 2017,
    title: "O Seu Amor é Tudo",
    artist: "Nádia Santolli",
    cover: nadiaSantolli,
    preview: null,
    spotifyUrl: "",
  },

  {
    id: "aline-silva-uma-nova-luz",
    year: 2017,
    title: "Uma Nova Luz",
    artist: "Aline Silva",
    cover: alineSilva,
    preview: null,
    spotifyUrl: "",
  },

  {
    id: "bispo-rodovalho-entra-no-meu-lar",
    year: 2011,
    title: "Entra no Meu Lar",
    artist: "Bispo Rodovalho",
    cover: bispoEntra,
    preview: null,
    spotifyUrl: "",
  },

  {
    id: "bispo-rodovalho-seguindo-em-frente",
    year: 2011,
    title: "Seguindo em Frente",
    artist: "Bispo Rodovalho",
    cover: bispoSeguindo,
    preview: null,
    spotifyUrl: "",
  },

  {
    id: "bispo-rodovalho-faz-o-meu-milagre",
    year: 2012,
    title: "Faz o Meu Milagre",
    artist: "Bispo Rodovalho",
    cover: bispoMilagre,
    preview: null,
    spotifyUrl: "",
  },

  {
    id: "bispo-rodovalho-alegria-verdadeira",
    year: 2014,
    title: "Alegria Verdadeira",
    artist: "Bispo Rodovalho",
    cover: bispoAlegria,
    preview: null,
    spotifyUrl: "",
  },

  {
    id: "bispo-rodovalho-sara-nossa-terra",
    year: 2015,
    title: "Sara Nossa Terra — Por Favor",
    artist: "Bispo Rodovalho",
    cover: bispoSara,
    preview: null,
    spotifyUrl: "",
  },

  {
    id: "helio-borges-alem-do-veu",
    year: 2015,
    title: "Além do Véu",
    artist: "Hélio Borges",
    cover: helioAlem,
    preview: null,
    spotifyUrl: "",
  },

  {
    id: "helio-borges-vem-com-tua-gloria",
    year: 2017,
    title: "Vem com Tua Glória",
    artist: "Hélio Borges",
    cover: helioGloria,
    preview: null,
    spotifyUrl: "",
  },

  {
    id: "monica-vaz-sobrenatural",
    year: 2015,
    title: "Sobrenatural",
    artist: "Mônica Vaz",
    cover: monicaVaz,
    preview: null,
    spotifyUrl: "",
  },

  {
    id: "supernovavida-forca-das-aguas",
    year: 2002,
    title: "Força das Águas",
    artist: "Supernovavida",
    cover: supernovaForca,
    preview: null,
    spotifyUrl: "",
  },

  {
    id: "supernovavida-dvd-ao-vivo",
    year: 2010,
    title: "DVD ao Vivo",
    artist: "Supernovavida",
    cover: supernovaDvd,
    preview: null,
    spotifyUrl: "",
  },

  {
    id: "supernovavida-favor-de-deus",
    year: 2012,
    title: "Favor de Deus",
    artist: "Supernovavida",
    cover: supernovaFavor,
    preview: null,
    spotifyUrl: "",
  },

  {
    id: "supernovavida-brisa",
    year: 2015,
    title: "Brisa",
    artist: "Supernovavida",
    cover: supernovaBrisa,
    preview: null,
    spotifyUrl: "",
  },

  {
    id: "supernovavida-nao-para-nao",
    year: 2015,
    title: "Não Para Não",
    artist: "Supernovavida",
    cover: supernovaNaoPara,
    preview: null,
    spotifyUrl: "",
  },
];

export default audios;