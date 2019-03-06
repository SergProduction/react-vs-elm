import Browser
import Html exposing (Html, button, div, text)
import Html.Events exposing (onClick)


main =
  Browser.sandbox { init = init, update = update, view = view }


-- MODEL

type alias Model =
  { count : Int
  , lastCounter : Int
  }

init : Model
init =
  { count : 0
  , lastCounter : 0
  }


-- MESSAGE

type Msg
  = Increment
  | Decrement
  | SetCounter Int



-- UPDATE

update : Msg -> Model -> Model
update msg model =
  case msg of
    Increment ->
      { model | count =  model.count + 1 }

    Decrement ->
      { model | count =  model.count - 1 }

    SetCounter counter ->
      { count = counter, lastCounter = model.count }


-- VIEW

view : Model -> Html Msg
view model =
  div []
    [ button [ onClick Decrement ] [ text "-" ]
    , div [] [ text ( String.fromInt model.count ) ]
    , button [ onClick Increment ] [ text "+" ]
    , button [ onClick ( SetCounter 0 ) ] [ text "reset" ]
    , div [] [ text ( String.fromInt ("lastCounter: " ++ model.lastCounter) ) ]
    ]