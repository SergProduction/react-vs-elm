-- https://habr.com/ru/post/442346/


type alias Model =
  { loading : Bool
  , error : Just String
  , popupsOpened : List String
  }

init : Model
init =
  { loading = True
  , error = Nothing
  , popupsOpened = ["popup1", "popup2", "popup3"]
  }


type FetchingStatus
  = Start String
  | Fail String
  | Success String
  

type Msg
  = Open FetchingStatus
  | Close FetchingStatus



update : Msg -> Model -> Model
update msg model =
  case msg of
    Open status ->
      case status of
        Start ->
          { model | loading = True, error = Nothing }

        Fail error ->
          { model | error = Just error }
        
        Success popupName ->
          { model | popupsOpened = model.popupsOpened :: popupName }
    
    Close status ->
      case status of
        Start ->
          { model | loading = True, error = Nothing }

        Fail error ->
          { model | error = Just error }
        
        Success popupName ->
          { model | popupsOpened = List.filter (\x -> x not popupName) model.popupsOpened }