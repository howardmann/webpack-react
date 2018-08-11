let hoc = module.exports = {}

hoc.makeDispatch = (context, reducer) => action => {
  let newState = reducer(context.state, action)
  context.setState(newState)
}
