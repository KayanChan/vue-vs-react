import React from 'react'
import PropTypes from 'prop-types'
import { Select } from 'antd'

const { Option } = Select

function ProvinceCityDistrictSelect (props) {
  const {
    province,
    provinces,
    onProvinceChange,
    city,
    cities,
    onCityChange,
    district,
    districts,
    onDistrictChange
  } = props

  return (
    <>
      <Select value={province} style={{ width: 124, marginRight: 10 }} onChange={onProvinceChange}>
        <Option value="">选择省份</Option>
        {
          provinces.map(province => <Option value={province.id} key={province.id}>{province.name}</Option>)
        }
      </Select>
      <Select value={city} style={{ width: 124, marginRight: 10 }} onChange={onCityChange}>
        <Option value="">选择城市</Option>
        {
          cities.map(city => <Option value={city.id} key={city.id}>{city.name}</Option>)
        }
      </Select>
      <Select value={district} style={{ width: 124 }} onChange={onDistrictChange}>
      <Option value="">选择地区</Option>
        {
          districts.map(district => <Option value={district.id} key={district.id}>{district.name}</Option>)
        }
      </Select>
    </>
  )
}

ProvinceCityDistrictSelect.propTypes = {
  /**
   * 省份
   */
  province: PropTypes.string,
  provinces: PropTypes.array,
  onProvinceChange: PropTypes.func,
  /**
   * 城市
   */
  city: PropTypes.string,
  cities: PropTypes.array,
  onCityChange: PropTypes.func,
  /**
   * 地区
   */
  district: PropTypes.string,
  districts: PropTypes.array,
  onDistrictChange: PropTypes.func
}
export default ProvinceCityDistrictSelect