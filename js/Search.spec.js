// import React from 'react'
// import Search from './Search'
// import renderer from 'react-test-renderer'
//
// test('Search should search titles', () => {
//   const component = renderer.create(<Search />)
//   let tree = component.toJSON()
//   expect(tree).toMatchSnapshot()
// })


import React from 'react'
import Search from './Search'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import ShowRecipe from './Recipe'
import preload from '../public/dataRecipe.json'

test('Search render correctly', () => {
  const component = shallow(<Search />)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})

test('Search should render correct amount of recipes', () => {
  const component = shallow(<Search />)
  expect(preload.recipes.length).toEqual(component.find(ShowRecipe).length)
})

test('Search should render correct amount of recipes based on search', () => {
  const searchWord = 'guacamole'
  const component = shallow(<Search />)
  component.find('input').simulate('change',{target:{value: searchWord}})
  const recipeCount = preload.recipes.filter((recipe) => `${recipe.title.toUpperCase()} ${recipe.description.toUpperCase()}`.includes(searchWord.toUpperCase())).length
  const componentLength = component.find(ShowRecipe).length
  expect(recipeCount).toEqual(componentLength)
})
