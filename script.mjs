import { config } from './config/config.mjs'

const canvas = document.querySelector("canvas#chart").getContext("2d");

const chart = new Chart(canvas, config);