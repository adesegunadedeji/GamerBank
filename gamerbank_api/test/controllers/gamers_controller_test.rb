require 'test_helper'

class GamersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @gamer = gamers(:one)
  end

  test "should get index" do
    get gamers_url, as: :json
    assert_response :success
  end

  test "should create gamer" do
    assert_difference('Gamer.count') do
      post gamers_url, params: { gamer: { genre: @gamer.genre, image: @gamer.image, platform: @gamer.platform, title: @gamer.title } }, as: :json
    end

    assert_response 201
  end

  test "should show gamer" do
    get gamer_url(@gamer), as: :json
    assert_response :success
  end

  test "should update gamer" do
    patch gamer_url(@gamer), params: { gamer: { genre: @gamer.genre, image: @gamer.image, platform: @gamer.platform, title: @gamer.title } }, as: :json
    assert_response 200
  end

  test "should destroy gamer" do
    assert_difference('Gamer.count', -1) do
      delete gamer_url(@gamer), as: :json
    end

    assert_response 204
  end
end
