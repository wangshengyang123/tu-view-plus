import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Pagination from '../src/pagination.vue'

const AXIOM = 'Tu view is good'

describe('Pagination.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Pagination>{AXIOM}</Pagination>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
