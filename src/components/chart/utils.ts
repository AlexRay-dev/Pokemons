import Highcharts, {SeriesOptionsType} from "highcharts/highstock";
import {DetailedPokemon} from "../../core/types/pokemons";

const getPokemonSeries = (pokemons: DetailedPokemon[]): SeriesOptionsType[] => {
  const series: SeriesOptionsType[] = [];
  pokemons.forEach(pokemon => {
    series.push({
      type: 'column',
      name: pokemon.name,
      data: [pokemon.weight],
      dataLabels: {
        enabled: true
      }
    })
  });
  return series;
}

export const getHighchartsOptions = (pokemons: DetailedPokemon[]) => {
  const series = getPokemonSeries(pokemons);

  const options: Highcharts.Options = {
    accessibility: {
      enabled: false
    },
    chart: {
      alignTicks: false
    },
    rangeSelector: {
      selected: 1
    },
    title: {
      text: 'Pokemon weight comparison'
    },
    tooltip: {
      valueSuffix: 'kg'
    },
    yAxis: {
      title: {
        text: 'Weight (kg)'
      },
    },
    xAxis: {
      title: {
        text: 'Pokemons'
      },
    },
    series: series
  }
  return options;
}
