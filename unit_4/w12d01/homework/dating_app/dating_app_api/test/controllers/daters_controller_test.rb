require 'test_helper'

class DatersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @dater = daters(:one)
  end

  test "should get index" do
    get daters_url, as: :json
    assert_response :success
  end

  test "should create dater" do
    assert_difference('Dater.count') do
      post daters_url, params: { dater: { age: @dater.age, img: @dater.img, ltl: @dater.ltl, name: @dater.name, starsign: @dater.starsign } }, as: :json
    end

    assert_response 201
  end

  test "should show dater" do
    get dater_url(@dater), as: :json
    assert_response :success
  end

  test "should update dater" do
    patch dater_url(@dater), params: { dater: { age: @dater.age, img: @dater.img, ltl: @dater.ltl, name: @dater.name, starsign: @dater.starsign } }, as: :json
    assert_response 200
  end

  test "should destroy dater" do
    assert_difference('Dater.count', -1) do
      delete dater_url(@dater), as: :json
    end

    assert_response 204
  end
end
