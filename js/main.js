// Embeds every Vega-Lite spec (kept as readable JSON in /js) into its placeholder div.
const specs = {
  'vis-waffle': 'js/waffle.vg.json',
  'vis-trend': 'js/trend.vg.json',
  'vis-cal-bowel': 'js/calendar_bowel.vg.json',
  'vis-cal-breast': 'js/calendar_breast.vg.json',
  'vis-map-bowel': 'js/map_bowel.vg.json',
  'vis-maps-bc': 'js/maps_breast_cervical.vg.json',
  'vis-map-unscreened': 'js/map_unscreened.vg.json',
  'vis-map-change': 'js/map_change.vg.json',
  'vis-heat-age': 'js/heatmap_age.vg.json',
  'vis-dumbbell': 'js/dumbbell_sex.vg.json',
  'vis-map-bivar': 'js/map_bivariate.vg.json',
  'vis-legend-bivar': 'js/legend_bivariate.vg.json',
  'vis-box': 'js/boxplot_quintile.vg.json',
  'vis-lollipop': 'js/lollipop_extremes.vg.json',
  'vis-zoom-bowel': 'js/zoom_bowel.vg.json',
  'vis-zoom-change': 'js/zoom_change.vg.json',
  'vis-zoom-bivar': 'js/zoom_bivar.vg.json',
  'vis-slope': 'js/slope_states.vg.json',
  'vis-scatter': 'js/scatter_bowel.vg.json'
};
Object.entries(specs).forEach(([id, url]) => {
  vegaEmbed('#' + id, url, { actions: false, renderer: 'svg' })
    .catch(err => { console.error(id, err); document.getElementById(id).textContent = 'Chart failed to load.'; });
});
