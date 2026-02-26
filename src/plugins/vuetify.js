// plugins/vuetify.js
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VFileUpload } from 'vuetify/labs/VFileUpload'

export const vuetify = createVuetify({
  components: {
    ...components, // كل المكونات الأصلية
    VFileUpload,   // إضافة VFileUpload
  },
  directives,
})