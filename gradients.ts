
import { Colors } from './colors';
import { Measures } from './measures';

const cream01 = {
           type: 'Linear',
            direction: {
             from: {x: 0, y: 0.5 },
             to:   {x: 1, y: 0.5 },
           },
            stops: [
             {
               color: "#eae2d3",
               position: 0
             },
             {
               color: "#eeeae3",
               position: 1
             },
           ],
         };
const cream02 = {
           type: 'Linear',
            direction: {
             from: {x: 1, y: 0.5000002679310596 },
             to:   {x: 0, y: 0.5000002138240678 },
           },
            stops: [
             {
               color: "#f7f6f2",
               position: 0
             },
             {
               color: "#f5f1ea",
               position: 1
             },
           ],
         };
const creamTransparent01 = {
           type: 'Linear',
            direction: {
             from: {x: 0.5, y: 2.980232211013956e-8 },
             to:   {x: 0.5000000000369497, y: 1 },
           },
            stops: [
             {
               color: "#efece600",
               position: 0
             },
             {
               color: "#efece6",
               position: 1
             },
           ],
         };
const creamTransparent02 = {
           type: 'Linear',
            direction: {
             from: {x: 0.5, y: 2.980232211013956e-8 },
             to:   {x: 0.5000000000369497, y: 1 },
           },
            stops: [
             {
               color: "#f9f7f300",
               position: 0
             },
             {
               color: "#f9f7f3",
               position: 1
             },
           ],
         };
const whiteTransparent = {
           type: 'Linear',
            direction: {
             from: {x: 0.5, y: 2.980232211013956e-8 },
             to:   {x: 0.5000000000369497, y: 1 },
           },
            stops: [
             {
               color: "#ffffff00",
               position: 0
             },
             {
               color: "#ffffff",
               position: 1
             },
           ],
         };


export const Gradients = {
      cream01,
      cream02,
      creamTransparent01,
      creamTransparent02,
      whiteTransparent,
}