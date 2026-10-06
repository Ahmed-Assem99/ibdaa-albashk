import type { ImageAsset } from '../types/content'

const G = '/images/gallery'
const T = '/images/team'

function img(src: string, alt: string, width: number, height: number): ImageAsset {
  return { src, alt, width, height }
}

/** Site photo gallery on the Projects page. Photos are from the company profile. */
export const gallery: ImageAsset[] = [
  img(
    `${T}/toolbox-talk-stringing.webp`,
    'Toolbox talk with a stringing crew under a transmission tower',
    307,
    243,
  ),
  img(`${G}/lattice-tower.webp`, 'Red and white lattice tower on a desert site', 516, 630),
  img(`${G}/process-tanks-and-piping.webp`, 'Process tanks and red pipework', 516, 302),
  img(
    `${G}/foundation-excavation-crew.webp`,
    'Crew working on foundations in an excavation',
    516,
    302,
  ),
  img(`${G}/rebar-column-starter.webp`, 'Steel fixers placing column reinforcement', 517, 644),
  img(`${G}/concrete-pour.webp`, 'Concrete pour from a truck mixer', 516, 302),
  img(`${G}/pipe-offloading.webp`, 'Offloading pipes from a truck with slings', 516, 302),
  img(`${T}/engineers-site-visit.webp`, 'Engineers on a site visit', 323, 244),
  img(`${G}/steel-structure-fabrication.webp`, 'Steel structure fabrication on site', 516, 302),
  img(`${G}/skid-units.webp`, 'Row of skid-mounted process units', 516, 302),
  img(`${G}/crane-truck.webp`, 'Truck-mounted crane on a desert site', 516, 302),
  img(`${G}/rebar-mat.webp`, 'Reinforcement mat for a large foundation', 518, 644),
  img(`${G}/motor-grader.webp`, 'Motor grader levelling a site', 536, 430),
  img(`${G}/excavator-stockpile.webp`, 'Excavator working a stockpile', 536, 430),
  img(`${G}/trench-excavation.webp`, 'Long trench excavation', 536, 430),
  img(`${T}/crew-briefing.webp`, 'Site crew lined up for a morning briefing', 307, 243),
  img(`${G}/loader-and-dump-truck.webp`, 'Wheel loader filling a dump truck', 536, 430),
  img(`${G}/roller-compaction.webp`, 'Roller compacting fill near overhead power lines', 536, 430),
  img(`${G}/grader-roadworks.webp`, 'Grader on roadworks beside a retaining wall', 536, 430),
  img(`${G}/site-levelling.webp`, 'Site levelling with a gas flare in the distance', 536, 430),
  img(`${G}/water-bowser.webp`, 'Water bowser dampening a road base', 373, 299),
  img(`${G}/grader-on-access-track.webp`, 'Grader building an access track', 536, 430),
  img(`${G}/excavator-loading-truck.webp`, 'Excavator loading a truck', 536, 430),
  img(`${G}/pipe-laying.webp`, 'Pipe-laying equipment along a pipeline route', 536, 430),
  img(`${T}/toolbox-talk-circle.webp`, 'Toolbox talk in a circle before work', 325, 244),
  img(`${G}/site-grading.webp`, 'Site grading with a dump truck', 511, 382),
  img(`${G}/transmission-corridor.webp`, 'Transmission line corridor with towers', 263, 361),
  img(`${G}/rebar-cages.webp`, 'Reinforcement cages for concrete structures', 428, 152),
  img(`${G}/generator-engine.webp`, 'Diesel generator engine on site', 515, 302),
  img(`${T}/crew-at-cable-drums.webp`, 'Crew beside conductor drums', 307, 243),
  img(`${T}/site-inspection.webp`, 'Site inspection with the project team', 201, 268),
  img(`${T}/toolbox-talk-zubair.webp`, 'Safety briefing at a site in Al-Zubair', 307, 243),
  img(`${T}/toolbox-talk-crew.webp`, 'Toolbox talk with the site crew', 307, 243),
]
