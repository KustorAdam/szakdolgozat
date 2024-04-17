namespace KEK_API.Exceptions
{
    public class MandatoryPropertyEmptyException : Exception
    {
        public string PropertyName { get; private set; }

        public MandatoryPropertyEmptyException(string name)
        {
            this.PropertyName = name;
        }
    }
}
