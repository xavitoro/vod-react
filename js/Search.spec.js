import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import Search from './Search'
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
