import LgNavgitor from '../src/navgitor.vue'

export default {
  title: 'LgNavgitor',
  component: LgNavgitor
}

export const Navgitor = _ => ({
  components: { LgNavgitor },
  template: `
    <div>
      <lg-navgitor></lg-navgitor>
    </div>
  `
})