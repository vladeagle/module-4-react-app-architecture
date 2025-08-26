import { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    console.error(error);
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Ошибка загрузки. Попробуйте позже</h2>;
    }

    return this.props.children;
  }
}
